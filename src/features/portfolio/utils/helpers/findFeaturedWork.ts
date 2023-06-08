import works from '../data/works.json';
import type { Work } from '../data/types';

export type FindFeaturedWorkMode = "next" | "prev"

const findFeaturedWork = (id: number, mode: FindFeaturedWorkMode): Work | null => {
	let newFeaturedWork: Work = {} as Work

	for (let i = 0; i < works.length; i++) {
		if (works[i].id === id) {

			if (mode === 'next') {
				newFeaturedWork = works[i + 1] || works[0]
				break
			} else if (mode === 'prev') {
				newFeaturedWork = works[i - 1] || works[works.length - 1]
				break
			}
		}
	}

	return newFeaturedWork
}

export {
	findFeaturedWork
}