
export function useUtils() {
	const params: Record<string, any> = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop: string) => searchParams.get(prop),
		set: (searchParams, prop: string, newVal, reciver) => {
			searchParams.set(prop, newVal)
			const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString()
			history.pushState(null, '', newRelativePathQuery)
			return true
		}
	})

	return { params }
}