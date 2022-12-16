import { DefaultTheme } from 'vitepress'

export interface FrontMatter {
	title: string
	date: string
	author: string
	hideComment: boolean
	hideArticleMeta: boolean
	isPublished: boolean
	categories: string[]
	tags: string[]
	wordCount: number
}

export interface Post extends FrontMatter {
	name: string
	path: string
}

export interface MyConfig extends DefaultTheme.Config {
	posts?: Post[]
	tags?: [string, number][]
	categories?: [string, number][]
}

export interface ArchiveMonth extends Array<Record<number, Post[]>> {

}

export interface ArchiveList extends Array<Record<string, ArchiveMonth>> {

}


export interface ArchivesObj {
	[key: string]: {
		months: {
			[key: string]: Post[]
		}
	}
}