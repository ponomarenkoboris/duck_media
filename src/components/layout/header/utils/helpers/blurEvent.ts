import { RefObject } from "react";
import styles from '../../Header.module.scss';

export const navBlurEvent = (elementRef: RefObject<HTMLElement>) => {

	const appendListener = () => window.addEventListener('click', listener)

	const removeListener = () => window.removeEventListener('click', listener)

	const listener = (event: globalThis.MouseEvent) => {
		const element = event.target as HTMLElement

		if (!element.closest('nav') && elementRef.current) {
			elementRef.current.classList.remove(styles.showMenu)
			elementRef.current.classList.add(styles.hideMenu)
			removeListener()
		}
	}

	return {
		appendListener,
		removeListener
	}
}