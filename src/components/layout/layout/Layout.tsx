import { useRef, MouseEvent } from "react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

const poppins = Poppins({
	weight: ['300', '400', '600', '700'],
	subsets: ['latin']
})

export default function Layout({ children }: PropsWithChildren) {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const { pathname, push } = useRouter()

	const onListClick = (isInAction = false) => (event: MouseEvent<HTMLUListElement>) => {
		event.preventDefault()
		const anchor = (event.target as HTMLElement).closest('a');

		if (!anchor || isInAction || pathname === anchor.pathname) return

		isInAction = true

		wrapperRef.current?.classList.add(styles.pageLeave)
		setTimeout((href) => {
			push(href)
			isInAction = false
		}, parseInt(styles.animationDuration), anchor.pathname)
	}

	return (
		<div 
			ref={wrapperRef}
			className={`${poppins.className} ${styles.appWrapper} ${styles.pageEnter}`} 
		>
			<Header onListClick={onListClick()} />
			<main className={styles.main}>
				{children}
			</main>
		</div>
	)
}