import { PortfolioWorks } from "../PortfolioWorks";
import { render } from "@testing-library/react";
import works from "@data/works.json";

describe("Тестирование работы компонета PortfolioWorks", () => {

	it("Должно вывести на экран все работы", () => {
		const { container } = render(<PortfolioWorks />);
		const worksEls = container.querySelectorAll("[data-workid]");
		expect(worksEls.length).toBe(works.length);
	});

});