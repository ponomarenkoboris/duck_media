import { validateEmail } from "../../validation/validateEmail";
import { validateText } from "../../validation/validateText";
import { ErrorMessages } from "../../constants/errorMessages";

describe('Тестирование features/contacts/utils/validation', () => {
	it('Тестирование валидации email - пустое значение', () => {
		const email1 = '           '
		const email2 = ''

		expect(validateEmail(email1)).toBe(ErrorMessages.EMPTY)
		expect(validateEmail(email2)).toBe(ErrorMessages.EMPTY)
	})

	it('Тестирование валидации email - неправильный формат', () => {
		const email1 = 'dsmkaodfjaspodifj'
		const email2 = 'fmakosdfmok@f,olpdsa,fpo'
		const email3 = '@jiofsdjf.co'
		const email4 = 'cdmsacoipm.cop'
		const email5 = '             @yandex.ru'
		
		const email6 = '31241234@gmail.com'
		const email7 = 'fhiausodfh@fksidfo.com'

		expect(validateEmail(email1)).toBe(ErrorMessages.NOT_EMAIL)
		expect(validateEmail(email2)).toBe(ErrorMessages.NOT_EMAIL)
		expect(validateEmail(email3)).toBe(ErrorMessages.NOT_EMAIL)
		expect(validateEmail(email4)).toBe(ErrorMessages.NOT_EMAIL)
		expect(validateEmail(email5)).toBe(ErrorMessages.NOT_EMAIL)
		
		expect(validateEmail(email6)).toBe(null)
		expect(validateEmail(email7)).toBe(null)
	})

	it('Тестирование валидации text - пустое значение', () => {
		const text1 = '           '
		const text2 = ''

		const text3 = 'dfsdjafj'

		expect(validateText(text1)).toBe(ErrorMessages.EMPTY)
		expect(validateText(text2)).toBe(ErrorMessages.EMPTY)

		expect(validateText(text3)).toBe(null)
	})
})