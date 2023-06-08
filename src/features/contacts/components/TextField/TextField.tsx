import { useState, FocusEvent, useEffect, memo } from 'react';
import { validateEmail, validateText } from '@features/contacts/utils';
import styles from './TextField.module.scss';

type TextFieldProps = { 
	labelText?: string, 
	type: 'email' | 'text' | 'textarea',
	name: string,
	tipMessage: null | string
}

const TextFieldComponent = ({ labelText, type, name, tipMessage }: TextFieldProps) => {
	const [tip, setTip] = useState<typeof tipMessage>(tipMessage)

	const onInputBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const validationResult = type === 'email' ? validateEmail(event.currentTarget.value) : validateText(event.currentTarget.value)
		setTip(validationResult)		
	}

	useEffect(() => {
		setTip(tipMessage)
	}, [tipMessage])

	return (
		<label className={styles.form__item}>
			<span>{labelText}</span>
			<span className={styles.tip}>{tip}</span>
			{type === 'textarea' 
				? <textarea onBlur={onInputBlur} name={name} className={styles.form__field}></textarea> 
				: <input onBlur={onInputBlur} name={name} className={styles.form__field} type={type} />
			}
		</label>
	)
}

export const TextField = memo(TextFieldComponent)