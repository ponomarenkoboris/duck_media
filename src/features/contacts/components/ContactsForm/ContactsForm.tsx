import { useState, FormEvent } from "react";
import { TextField } from "../TextField/TextField";
import { validateEmail, validateText } from "@features/contacts/utils";
import styles from "./ContactsForm.module.scss";

type FormControls = { name: HTMLInputElement, email: HTMLInputElement, about: HTMLTextAreaElement } & HTMLFormControlsCollection
type FieldTips<T> = { nameTip: T, emailTip: T, aboutTip: T }

export const ContactsForm = () => {
	const [fieldTips, setFieldTips] = useState<FieldTips<string | null>>({ nameTip: null, emailTip: null, aboutTip: null })

	const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { name, email, about } = event.currentTarget.elements as FormControls

		const newTips = {
			nameTip: validateText(name.value),
			emailTip: validateEmail(email.value),
			aboutTip: validateText(about.value)
		}

		if (newTips.nameTip !== null || newTips.emailTip !== null || newTips.aboutTip !== null) {
			console.log(newTips)
			setFieldTips(newTips)
			console.log('not valid field')
			return 
		}

		console.log('field is valid')
	}

	return (
		<form onSubmit={onFormSubmit} className={styles.contacts__form}>
			<TextField 
				type="text"
				labelText='Как Вас зовут? *'
				name='name'
				tipMessage={fieldTips.nameTip}
			/>
			<TextField 
				type='email'
				labelText='Email адресс *'
				name='email'
				tipMessage={fieldTips.emailTip}
			/>
			<TextField
				type='textarea'
				labelText='Расскажите о Вашей задумке *'
				name='about'
				tipMessage={fieldTips.aboutTip}
			/>
			<div className={styles.form__bottom}>
				<button type="submit" className={styles.form__submit}>Отправить</button>
				<span>* Обязательные поля</span>
			</div>
		</form>
	)
}