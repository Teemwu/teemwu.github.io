
import sanitizeHtml from 'sanitize-html'

export const sendMessage = message => {
	if (typeof window === 'undefined') return
	const iframe = document.querySelector('iframe.giscus-frame') as any
	if (!iframe) return
	iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app')
}

export const getCommentTheme = (isDark: boolean) => isDark ? 'dark' : 'light'

export const setCommentTheme = (isDark: boolean) => sendMessage({ setConfig: { theme: getCommentTheme(isDark) } })

export const countWord = (content: string) => {
	content = sanitizeHtml(content)
	const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length
	const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length
	return cn + en
}
