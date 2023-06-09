import works from '@data/works.json';
import { PortfolioWorks } from "../PortfolioWorks";
import { render } from '@testing-library/react';

describe('Тестирование работы компонета PortfolioWorks', () => {

	it('Должно вывести на экран все работы', () => {
		const { container } = render(<PortfolioWorks />)
		const worksEls = container.querySelectorAll('[data-workid]');
		expect(worksEls.length).toBe(works.length)
	});

})