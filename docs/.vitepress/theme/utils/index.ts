
export const sendMessage = message => {
	const iframe = document.querySelector('iframe.giscus-frame') as any
	if (!iframe) return
	iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app')
}

export const getCommentTheme = (isDark: boolean) => isDark ? 'dark' : 'light'

export const setCommentTheme = (isDark: boolean) => sendMessage({ setConfig: { theme: getCommentTheme(isDark) } })
