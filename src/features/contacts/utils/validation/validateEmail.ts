import { ErrorMessages } from "../constants/errorMessages";

export const validateEmail = (email: string): null | string => {
	const regExp = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/gi);
	if (!email.trim().length) return ErrorMessages.EMPTY;

	if (!regExp.test(email.trim())) return ErrorMessages.NOT_EMAIL;

	return null;
};