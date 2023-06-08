import { encodeUserInput } from "../../helpers/encodeUserInput";

describe('Тестирование features/contacts/utils/helpers', () => {
	it('Тестирование encodeUserInput с одним входым параметром', () => {
		const testCase1 = '<script>alert("XSS")</script>'
		const testReslt1 = '&lt;script&gt;alert("XSS")&lt;/script&gt;'

		expect(encodeUserInput(testCase1)[0]).toBe(testReslt1)

		const testCase2 = 'fdsaofujiapfjM<diofpjasdopfi<fdsafaisdofjppafij> kfdpsoafk>'
		expect(encodeUserInput(testCase2)[0].indexOf('<')).toBe(-1)
		expect(encodeUserInput(testCase2)[0].indexOf('>')).toBe(-1)
	})

	it('Тестирование encodeUserInput с несколькими', () => {
		const testCase1 = '<script>alert("XSS")</script>'
		const testCase2 = 'fdsaofujiapfjM<diofpjasdopfi<fdsafaisdofjppafij> kfdpsoafk>'

		const result = encodeUserInput(testCase1, testCase2)

		for (let i = 0; i < result.length; i++) {
			expect(result[i].indexOf('<')).toBe(-1)
			expect(result[i].indexOf('>')).toBe(-1)
		}
	})
})