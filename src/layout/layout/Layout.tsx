import { MouseEvent, useRef } from "react";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

import Header from "../header/Header";
import { Meta } from "../seo/Meta";
import type { SeoConfig } from "@data/types/seo.type";
import seo from "@data/seo.json";
import styles from "./Layout.module.scss";

const poppins = Poppins({
	weight: ["300", "400", "600", "700"],
	subsets: ["latin"]
});

export default function Layout({ children }: PropsWithChildren) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const { pathname, push } = useRouter();
	const metadata = (seo as SeoConfig)[pathname];

	const onPageLeave = (isInAction = false) => (event: MouseEvent<HTMLUListElement | HTMLAnchorElement>) => {
		event.preventDefault();
		const anchor = (event.target as HTMLElement).closest("a");

		if (!anchor || isInAction || pathname === anchor.pathname) return;

		isInAction = true;

		wrapperRef.current?.classList.add(styles.pageLeave);
		setTimeout((href) => {
			push(href);
			isInAction = false;
		}, parseInt(styles.animationDuration), anchor.pathname);
	};

	return (
		<Meta title={metadata.title} description={metadata.description} >
			<div 
				ref={wrapperRef}
				className={`${poppins.className} ${styles.appWrapper} ${styles.pageEnter}`} 
			>
				<Header onPageLeave={onPageLeave()} />
				<main className={styles.main}>
					{children}
				</main>
			</div>
		</Meta>
	);
}