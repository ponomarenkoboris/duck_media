import { StaticImageData } from 'next/image'
import mountain1 from '@public/portfolio/mountains/thumb-31.jpg'
import mountain2 from '@public/portfolio/mountains/thumb-36.jpg'
import mountain3 from '@public/portfolio/mountains/thumb-39.jpg'
import mountain4 from '@public/portfolio/mountains/thumb-40.jpg'
import summer1 from '@public/portfolio/summer/thumb-34.jpg'
import summer2 from '@public/portfolio/summer/thumb-38.jpg'
import summer3 from '@public/portfolio/summer/thumb-41.jpg'
import water1 from '@public/portfolio/water/thumb-33.jpg'
import water2 from '@public/portfolio/water/thumb-39.jpg'
import water3 from '@public/portfolio/water/thumb-40.jpg'
import wood1 from '@public/portfolio/woods/thumb-32.jpg'
import wood2 from '@public/portfolio/woods/thumb-35.jpg'
import wood3 from '@public/portfolio/woods/thumb-38.jpg'

export type Work = { id: number, category: string, src: StaticImageData };

const works: Work[] = [
	{ id: 1, category: 'Горы', src: mountain1 },
	{ id: 2, category: 'Горы', src: mountain2 },
	{ id: 3, category: 'Горы', src: mountain3 },
	{ id: 4, category: 'Горы', src: mountain4 },
	{ id: 5, category: 'Лето', src: summer1 },
	{ id: 6, category: 'Лето', src: summer2 },
	{ id: 7, category: 'Лето', src: summer3 },
	{ id: 8, category: 'Вода', src: water1 },
	{ id: 9, category: 'Вода', src: water2 },
	{ id: 10, category: 'Вода', src: water3 },
	{ id: 11, category: 'Деревья', src: wood1 },
	{ id: 12, category: 'Деревья', src: wood2 },
	{ id: 13, category: 'Деревья', src: wood3 },
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