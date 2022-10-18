import path from 'node:path'
import inquirer from 'inquirer'
import inquirerPrompt from 'inquirer-autocomplete-prompt'
import CheckboxPlusPrompt from 'inquirer-checkbox-plus-prompt'
import fg from 'fast-glob'
import fs from 'fs-extra'
import PinyinEngine from 'pinyin-engine'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import chalk from 'chalk'
import { getTemplateContent, getSafeTitle, getDate } from 'cnblog2md/src/utils.mjs'

inquirer.registerPrompt('autocomplete', inquirerPrompt)
inquirer.registerPrompt('checkbox-plus', CheckboxPlusPrompt)

const dirs = fg.sync(['docs/**/*', '!docs/.vitepress', '!docs/public'], { onlyDirectories: true })
const files = fg.sync(['docs/**/*.md', '!docs/.vitepress', '!docs/public'], { onlyFiles: true })

const DEFAULT_DIR = 'docs/随笔/' + dayjs().format('YYYY')
const DEFAULT_AUTH = 'teemwu'

let categories = []
let tags = []

if (files.length) {
	const _categories = []
	const _tags = []
	files.forEach(file => {
		const { categories: c, tags: t } = matter(matter.read(file)).data
		if (c) _categories.push(...c)
		if (t) _tags.push(...t)
	})
	categories = [...new Set(_categories)]
	tags = [...new Set(_tags.filter(i => i))]
}

const searchHandle = (_, input, data, isAdd = true) => {
	return new Promise(function (resolve) {
		const result = new PinyinEngine(data).query(input)
		if (isAdd) {
			const newValue = input.split(',')
			result.push(...new Set(newValue.filter(i => i)))
		}
		resolve(result)
	})
}

/**
 * Search markdown file directory
 * @param {object} _ answers
 * @param {string} input type value
 * @returns string[]
 */
const searchDir = (_, input = DEFAULT_DIR) => new PinyinEngine(dirs).query(input)

const prompt = inquirer
	.prompt([
		{
			type: 'autocomplete',
			name: 'dir',
			message: '目录',
			searchText: '查找目录...',
			emptyText: '暂无数据',
			default: DEFAULT_DIR,
			source: searchDir,
			pageSize: 5,
			validate(val) {
				return val ? true : '请选择存储目录'
			}
		},
		{
			type: 'input',
			name: 'title',
			message: '标题',
			default: null,
			validate(val, { dir }) {
				const file = `${dir}/${val}.md`
				if (files.findIndex(f => f === file) >= 0) return '文章已存在: ' + file
				if (!val) return '请输入标题'
				return true
			}
		},
		{
			type: 'input',
			name: 'author',
			message: '作者',
			default: DEFAULT_AUTH,
			validate(val) {
				if (!val) return '请输入作者名称'
				return true
			}
		},
		{
			type: 'checkbox-plus',
			name: 'categories',
			message: '分类',
			pageSize: 5,
			highlight: true,
			searchable: true,
			default: ['yellow', 'red'],
			source: (_, i) => searchHandle(_, i, categories)
		},
		{
			type: 'checkbox-plus',
			name: 'tags',
			message: '标签',
			pageSize: 5,
			highlight: true,
			searchable: true,
			default: ['yellow', 'red'],
			source: (_, i) => searchHandle(_, i, tags)
		},
		{
			type: 'confirm',
			name: 'isPublished',
			message: '发布',
			default: false
		}
	])
	.then(answers => {
		const content = getTemplateContent({ ...answers, safeTitle: getSafeTitle(answers.title), date: getDate() })
		const outputPath = path.join(answers.dir, answers.title + '.md')
		fs.outputFile(outputPath, content).then(() => console.log(chalk.green('[完成]'), chalk.gray(outputPath)))
	})
