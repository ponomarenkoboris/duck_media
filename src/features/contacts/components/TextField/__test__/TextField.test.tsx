import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import { TextField } from "../TextField";
import { ErrorMessages } from '../../../utils/constants/errorMessages';

describe('Тестирование компонента TextField', () => {
	const labelText = 'Hello world'
	const tip = ''
	const name = 'about'

	it ('Должен отображать textarea', () => {
		const type = 'textarea'
		const { container } = render(<TextField labelText={labelText} tipMessage={tip} type={type} name={name} />)
		expect(container.querySelector('textarea')).toBeInTheDocument()
		expect(container.querySelector('input')).not.toBeInTheDocument()
	})

	it('Должен отображать input type="text"', () => {
		const { container } = render(<TextField labelText={labelText} tipMessage={tip} type={'text'} name={name} />)
		expect(container.querySelector('input[type="text"]')).toBeInTheDocument()
		expect(container.querySelector('textarea')).not.toBeInTheDocument()
	})

	it('Должен отображать input type="email"', () => {
		const { container } = render(<TextField labelText={labelText} tipMessage={tip} type={'email'} name={name} />)
		expect(container.querySelector('input[type="email"]')).toBeInTheDocument()
		expect(container.querySelector('textarea')).not.toBeInTheDocument()
	})

	it('Валидация пользовательского ввода input type="email" on blur [пустой ввод]', async () => {
		const user = userEvent.setup()
		render(<TextField labelText={labelText} tipMessage={''} type={'email'} name={name} />)
		const label = await screen.findByLabelText(labelText)
		await user.click(label)
		await user.type(label, " ")
		await user.tab()
		const tip = await screen.findByText(ErrorMessages.EMPTY)
		expect(tip.textContent).toBe(ErrorMessages.EMPTY)
	})

	it('Валидация пользовательского ввода input type="email" on blur [не корректный формат данных]', async () => {
		const user = userEvent.setup()
		render(<TextField labelText={labelText} tipMessage={''} type={'email'} name={name} />)
		const label = await screen.findByLabelText(labelText)
		await user.click(label)
		await user.type(label, "@yandex.ru")
		await user.tab()
		const tip = await screen.findByText(ErrorMessages.NOT_EMAIL)
		expect(tip.textContent).toBe(ErrorMessages.NOT_EMAIL)
	})

	it('Валидация пользовательского ввода input type="email" on blur [корректный формат данных]', async () => {
		const user = userEvent.setup()
		const { container } = render(<TextField labelText={labelText} tipMessage={''} type={'email'} name={name} />)
		const label = await screen.findByLabelText(labelText)
		await user.click(label)
		await user.type(label, "testtest@yandex.ru")
		await user.tab();
		const tip = container.querySelector('.tip');
		expect(tip?.textContent).toBe('')
	})

	it('Валидация пользовательского ввода input type="text" on blur [пустой ввод]', async () => {
		const user = userEvent.setup()
		render(<TextField labelText={labelText} tipMessage={''} type={'text'} name={name} />)
		const label = await screen.findByLabelText(labelText)
		await user.click(label)
		await user.type(label, " ")
		await user.tab()
		const tip = await screen.findByText(ErrorMessages.EMPTY)
		expect(tip?.textContent).toBe(ErrorMessages.EMPTY)
	})

	it('Валидация пользовательского ввода input type="text" on blur [корректный формат данных', async () => {
		const user = userEvent.setup()
		const { container } = render(<TextField labelText={labelText} tipMessage={''} type={'text'} name={name} />)
		const label = await screen.findByLabelText(labelText)
		await user.click(label)
		await user.type(label, "ddsklfj sdflkjsdf < dklsfjsdf")
		await user.tab()
		const tip = container.querySelector('.tip');
		expect(tip?.textContent).toBe('')
	})

})