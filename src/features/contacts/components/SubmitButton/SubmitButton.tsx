import { ButtonHTMLAttributes } from "react";

import styles from "./SubmitButton.module.scss";

type FetchStatus = "PENDING" | "SUCCESS" | "ERROR" | "DEFAULT"

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    status: FetchStatus,
}

export const SubmitButton = ({ status, ...props }: SubmitButtonProps) => {
    if (status === "PENDING") {
        return <button id={styles.pending__status} {...props} disabled>Отправка</button>;
    }

    if (status === "SUCCESS") {
        return <button id={styles.success__status} {...props} disabled>Отправлено</button>;
    }

    if (status === "ERROR") {
        return <button id={styles.error__status} {...props} disabled>Ошибка</button>;
    }

    return <button {...props}>Отправить</button>;
};
