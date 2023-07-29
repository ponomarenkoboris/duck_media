import { findFeaturedWork } from "../../helpers/findFeaturedWork";
import works from "@data/works.json";

describe("Тестирование features/portfolio/utils/helpers/findFeaturedWork", () => {
	it("Тестирование поиска следующего элемента works", () => {
		for (let i = 0; i < works.length; i++) {
			const nextWork = findFeaturedWork(works[i].id, "next");

			if (i === works.length - 1) {
				expect(nextWork?.id).toBe(works[0].id);
			} else {
				expect(nextWork?.id).toBe(works[i + 1].id);
			}
		}
	});

	it("Тестирование поиска пердидущего элемента works", () => {
		for (let i = 0; i < works.length; i++) {
			const nextWork = findFeaturedWork(works[i].id, "prev");

			if (i === 0) {
				expect(nextWork?.id).toBe(works[works.length - 1].id);
			} else {
				expect(nextWork?.id).toBe(works[i - 1].id);
			}
		}
	});
});