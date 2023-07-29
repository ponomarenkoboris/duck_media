import { FormEvent, useState } from "react";
import { encodeUserInput, validateEmail, validateText } from "@features/contacts/utils";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { TextField } from "../TextField/TextField";
import styles from "./ContactsForm.module.scss";

type FormControls = { name: HTMLInputElement, email: HTMLInputElement, about: HTMLTextAreaElement } & HTMLFormControlsCollection
type FieldTips<T> = { nameTip: T, emailTip: T, aboutTip: T }

enum FetchStatus {
	PENDING = "PENDING",
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
	DEFAULT = "DEFAULT",
}

export const ContactsForm = () => {
	const [fieldTips, setFieldTips] = useState<FieldTips<string | null>>({ nameTip: null, emailTip: null, aboutTip: null });
	const [fetchStatus, setFetchStatus] = useState(FetchStatus.DEFAULT);

	const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { 
			name: { value: nameVal }, 
			email: { value: emailVal }, 
			about: { value: aboutVal } 
		} = event.currentTarget.elements as FormControls;

		const newTips = {
			nameTip: validateText(nameVal),
			emailTip: validateEmail(emailVal),
			aboutTip: validateText(aboutVal)
		};

		if (newTips.nameTip || newTips.emailTip || newTips.aboutTip) {
			setFieldTips(newTips);
			return ;
		}

		const fetchConfig = { method: "POST", body: JSON.stringify(encodeUserInput(nameVal, emailVal, aboutVal)) };
		setFetchStatus(FetchStatus.PENDING);

		try {
			const response = await fetch("/api/contacts-submit", fetchConfig);
			if (response.ok) {
				setFetchStatus(FetchStatus.SUCCESS);
			} else {
				setFetchStatus(FetchStatus.ERROR);
			}
		} catch (error) {
			setFetchStatus(FetchStatus.ERROR);
		}
	};

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
				<SubmitButton type="submit" status={fetchStatus} className={styles.form__submit} />
				<span>* Обязательные поля</span>
			</div>
		</form>
	);
};