import { categories } from '../../../utils';
import works from '@data/works.json'
import { PortfolioWorks } from "../../PortfolioWorks";
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

const filterWorks = (cat: string): string => {
	return cat === 'Все' 
		? works.reduce((acc: string, curr) => acc + curr.id, '') 
		: works.filter(({ category }) => category === cat).reduce((acc, curr) => acc + curr.id, '')
}

describe("Тестирование работы компонента CategoriesSelector", () => {
	let component: HTMLElement;

	beforeEach(() => {
		const { container } = render(<PortfolioWorks />)
		component = container
	})

	it('Должно вывести меню фильтрации работ', () => {
		const categoryButton = component.querySelector('.categories__controller');
		const mouseEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

		if (categoryButton) {
			fireEvent(categoryButton, mouseEvent)
			const categoriesEls = component.querySelectorAll('[data-role]')
			expect(categoriesEls.length).toBe(categories.length)
		} else {
			expect(component.querySelector('.categories__controller')).toBe(HTMLButtonElement)
		}
	})

	it('Должно осуществлять фильтрацию работ по всем разделам', () => {
		const categoryButton = component.querySelector('.categories__controller');
		const mouseEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

		if (categoryButton) {
			
			for (let i = 0; i < categories.length; i++) {
				fireEvent(categoryButton, mouseEvent)
				const categoriesEl = component.querySelector<HTMLElement>(`[data-role=${categories[i].category}]`)

				if (!categoriesEl) throw new Error(`Missing element in DOM: ${categories[i]}`)
				
				fireEvent(categoriesEl, mouseEvent)

				const filteredWorks = filterWorks(categoriesEl.dataset.role!)

				let workCards: string = ''
				const workCardsEls = component.querySelectorAll<HTMLElement>('.workCard')
				
				workCardsEls.forEach((item) => {
					if (item.dataset.workid) workCards += item.dataset.workid
				})

				expect(filteredWorks).toBe(workCards)
			}

		} else {
			expect(component.querySelector('.categories__controller')).toBe(HTMLButtonElement)
		}
	})
})