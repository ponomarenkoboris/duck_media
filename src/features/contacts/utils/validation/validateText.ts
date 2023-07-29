import { ErrorMessages } from "../constants/errorMessages";

export const validateText = (text: string): null | string => {
	if (!text.trim().length) return ErrorMessages.EMPTY;

	return null;
};