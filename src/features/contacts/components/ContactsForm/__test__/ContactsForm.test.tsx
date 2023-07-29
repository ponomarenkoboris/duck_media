import { render, screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import userEvent from "@testing-library/user-event";

import { ContactsForm } from "../ContactsForm";
import { ErrorMessages } from "@features/contacts/utils/constants/errorMessages";

describe("Тестирование компонента ContactsForm", () => {
	let user: UserEvent;
	let nameInput: HTMLElement;
	let emailInput: HTMLElement ;
	let aboutInput: HTMLElement;
	let submitButton: HTMLElement;
	
	beforeEach(() => {
		user = userEvent.setup();
		const { container } = render(<ContactsForm />);
		const nameEl = container.querySelector<HTMLElement>("input[name='name']");
		const emailEl = container.querySelector<HTMLElement>("input[name='email']");
		const aboutEl = container.querySelector<HTMLElement>("textarea[name='about']");
		const submitEl = container.querySelector<HTMLElement>("button[type='submit']");

		if (!submitEl) throw new Error(`Missing button type="submit" in ContactsForm`);
		if (!nameEl) throw new Error(`Missing input name="name" in ContactsForm`);
		if (!emailEl) throw new Error(`Missing input name="email" in ContactsForm`);
		if (!aboutEl) throw new Error(`Missing texarea name="about" in ContactsForm`);

		nameInput = nameEl;
		emailInput = emailEl;
		aboutInput = aboutEl;
		submitButton = submitEl;
	});
	
	it("Валидация компонента [все поля пустые]", async () => {
		await user.click(submitButton);
		const tips = await screen.findAllByText(ErrorMessages.EMPTY);
		expect(tips.length).toBe(3);
	});

	it("Валидация компонента [не корректный формат name - пустая строка]", async () => {
		await user.type(nameInput, "  ");
		await user.type(emailInput, "testest@yandex.ru");
		await user.type(aboutInput, "dfjkodspjaf > dsiofjasodif< opkfqpwofk");
		await user.click(submitButton);
		const tips = await screen.findAllByText(ErrorMessages.EMPTY);
		expect(tips.length).toBe(1);
		expect(tips[0].textContent).toBe(ErrorMessages.EMPTY);
	});

	it("Валидация компонента [не корректный формат email - пустая строка]", async () => {
		await user.type(nameInput, "ваывафыа");
		await user.type(emailInput, "  ");
		await user.type(aboutInput, "dfjkodspjaf > dsiofjasodif< opkfqpwofk");
		await user.click(submitButton);
		const tips = await screen.findAllByText(ErrorMessages.EMPTY);
		expect(tips.length).toBe(1);
		expect(tips[0].textContent).toBe(ErrorMessages.EMPTY);
	});

	it("Валидация компонента [не корректный формат email - не правильный email]", async () => {
		await user.type(nameInput, "ваывафыа");
		await user.type(emailInput, "  @yrande.ru");
		await user.type(aboutInput, "dfjkodspjaf > dsiofjasodif< opkfqpwofk");
		await user.click(submitButton);
		const tips = await screen.findAllByText(ErrorMessages.NOT_EMAIL);
		expect(tips.length).toBe(1);
		expect(tips[0].textContent).toBe(ErrorMessages.NOT_EMAIL);
	});

	it("Валидация компонента [не корректный формат about]", async () => {
		await user.type(nameInput, "ваывафыа");
		await user.type(emailInput, "testestes@yrande.ru");
		await user.type(aboutInput, "   ");
		await user.click(submitButton);
		const tips = await screen.findAllByText(ErrorMessages.EMPTY);
		expect(tips.length).toBe(1);
		expect(tips[0].textContent).toBe(ErrorMessages.EMPTY);
	});
});