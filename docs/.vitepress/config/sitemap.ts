import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []
const hostname = 'https://teemwu.github.io/'

export const transformHtml = (_, id, { pageData }) => {
	if (!/[\\/]404\.html$/.test(id))
		links.push({
			// you might need to change this if not using clean urls mode
			url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
			lastmod: pageData.lastUpdated
		})
}

export const buildEnd = ({ outDir }) => {
	const sitemap = new SitemapStream({ hostname })
	const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
	sitemap.pipe(writeStream)
	links.forEach((link) => sitemap.write(link))
	sitemap.end()
}