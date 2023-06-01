import { getCategories, works } from "../portfolioData";

describe('Тестирование portfolioData', () => {
	it('Функция getCategories всегда должна возвращать массив с arr[0].category === "Все"', () => {
		const randomSort = () => Math.random() - 0.5;
		let categories = getCategories(works);
		expect(categories[0].category).toBe('Все')

		works.sort(randomSort)
		categories = getCategories(works)
		expect(categories[0].category).toBe('Все')

		works.sort(randomSort)
		categories = getCategories(works)
		expect(categories[0].category).toBe('Все')

		works.sort(randomSort)
		categories = getCategories(works)
		expect(categories[0].category).toBe('Все')
		
		works.sort(randomSort)
		categories = getCategories(works)
		expect(categories[0].category).toBe('Все')
	}) 
})