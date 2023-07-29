import { fireEvent } from "@testing-library/react";
import { render } from "@testing-library/react";

import { PortfolioWorks } from "../../PortfolioWorks";

const randElement = (length: number): number => Math.floor(Math.random() * length);

describe("Тестирование работы FeaturedWork", () => {
	let rootComponent: HTMLElement;
	let worksEls: NodeListOf<HTMLElement>;
	let clickEvent: MouseEvent;
	let randomWorkEl: HTMLElement;
	
	beforeEach(() => {
		const { container } = render(<PortfolioWorks />);
		rootComponent = container;
		clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
		worksEls = rootComponent.querySelectorAll<HTMLElement>("div[data-workid]");
		randomWorkEl = worksEls[randElement(worksEls.length)];
		fireEvent(randomWorkEl, clickEvent);
	});

	it ("Должен вывести выбранную работу на экран", () => {
		expect(rootComponent.querySelector("#work-showreal")).toBeInTheDocument();
	});

	it("Должно закрыться при нажатии на кнопку закрытия", () => {
		const button = rootComponent.querySelector("[data-controller=\"close\"]");

		if (!button) throw new Error("Missing controller=\"close\" element in the document.");

		fireEvent(button, clickEvent);

		expect(rootComponent.querySelector("#work-showreal")).not.toBeInTheDocument();
	});

	it("Слайдер должен осуществелять прокрутку вперед", () => {
		const startWorkEl = rootComponent.querySelector<HTMLElement>("#work-showreal");

		if (!startWorkEl) throw new Error("Missing start #work-showreal element in the document.");

		const startWorkElId = startWorkEl.dataset.id;
		let currentEl = startWorkEl;

		for (let i = 0; i < worksEls.length; i++) {
			if (!currentEl) throw new Error("Missing #work-showreal element in the document.");
			const controller = currentEl.querySelector("[data-controller=\"next\"]");
			if (!controller) throw new Error("Missing controller=\"next\" element in the document.");
			fireEvent(controller, clickEvent);
			currentEl = rootComponent.querySelector<HTMLElement>("#work-showreal")!;
		}

		expect(currentEl?.dataset.id).toBe(startWorkElId);
	});

	it("Слайдер должен осуществелять прокрутку назад", () => {
		const startWorkEl = rootComponent.querySelector<HTMLElement>("#work-showreal");

		if (!startWorkEl) throw new Error("Missing start #work-showreal element in the document.");

		const startWorkElId = startWorkEl.dataset.id;
		let currentEl = startWorkEl;

		for (let i = 0; i < worksEls.length; i++) {
			if (!currentEl) throw new Error("Missing #work-showreal element in the document.");
			const controller = currentEl.querySelector("[data-controller=\"prev\"]");
			if (!controller) throw new Error("Missing controller=\"prev\" element in the document.");
			fireEvent(controller, clickEvent);
			currentEl = rootComponent.querySelector<HTMLElement>("#work-showreal")!;
		}

		expect(currentEl?.dataset.id).toBe(startWorkElId);
	});
});