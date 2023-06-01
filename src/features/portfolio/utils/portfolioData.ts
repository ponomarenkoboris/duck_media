export type Work = { id: number, category: string, src: string };

const works: Work[] = [
	{ id: 1, category: 'Горы', src: '/portfolio/mountains/thumb-31.jpg' },
	{ id: 2, category: 'Горы', src: '/portfolio/mountains/thumb-36.jpg' },
	{ id: 3, category: 'Горы', src: '/portfolio/mountains/thumb-39.jpg' },
	{ id: 4, category: 'Горы', src: '/portfolio/mountains/thumb-40.jpg' },
	{ id: 5, category: 'Лето', src: '/portfolio/summer/thumb-34.jpg' },
	{ id: 6, category: 'Лето', src: '/portfolio/summer/thumb-38.jpg' },
	{ id: 7, category: 'Лето', src: '/portfolio/summer/thumb-41.jpg' },
	{ id: 8, category: 'Вода', src: '/portfolio/water/thumb-33.jpg' },
	{ id: 9, category: 'Вода', src: '/portfolio/water/thumb-39.jpg' },
	{ id: 10, category: 'Вода', src: '/portfolio/water/thumb-40.jpg' },
	{ id: 11, category: 'Деревья', src: '/portfolio/woods/thumb-32.jpg' },
	{ id: 12, category: 'Деревья', src: '/portfolio/woods/thumb-35.jpg' },
	{ id: 13, category: 'Деревья', src: '/portfolio/woods/thumb-38.jpg' },
]

export type Category = Omit<Work, 'src'>;

const getCategories = (works: Category[]): Category[] => {
	const map: { [key: string]: string } = {}
	const result: Category[] = []

	for (let i = 0; i < works.length; i++) {
		if (i === 0) result.push({ id: works.length, category: 'Все' })

		if (!map[works[i].category]) {
			result.push({ id: works[i].id, category: works[i].category })
			map[works[i].category] = works[i].category
		}
	}

	return result
}

const categories = getCategories(works);

export {
	works,
	categories,
	getCategories
}