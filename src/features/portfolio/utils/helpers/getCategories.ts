import works from '../data/works.json';
import type { Work } from '../data/types';
export type Category = Omit<Work, 'src' | 'name'>;

export const getCategories = (works: Category[]): Category[] => {
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
	categories
}