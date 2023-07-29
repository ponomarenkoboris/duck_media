import { MouseEvent, useEffect, useRef } from "react";
import { navBlurEvent, routes } from "./utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import duckLogo from "public/logo/logo_white.png";
import styles from "./Header.module.scss";

interface HeaderProps {
	onPageLeave: (e: MouseEvent<HTMLUListElement | HTMLAnchorElement>) => void
}

export default function Header({ onPageLeave }: HeaderProps) {
	const { pathname } = useRouter();
	const navRef = useRef<HTMLElement>(null);

	const { appendListener, removeListener } = navBlurEvent(navRef);

	const onMenuButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		if (!navRef.current) return;

		if (!navRef.current.classList.contains(styles.showMenu)) {
			navRef.current.classList.remove(styles.hideMenu);
			navRef.current.classList.add(styles.showMenu);
			appendListener();
		} else {
			navRef.current.classList.remove(styles.showMenu);
			navRef.current.classList.add(styles.hideMenu);
			removeListener();
		}
	};

	useEffect(() => {
		return () => removeListener();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<header className={styles.header}>
			<div className={styles.logo__wrapper}>
				{pathname !== "/" && (
					<Link href={"/"} onClick={onPageLeave}>
						<Image
							height={45}
							src={duckLogo}
							alt='Duck'
						/>
					</Link>
				)}
			</div>
			<button 
				className={styles.header__menuButton}
				onClick={onMenuButtonClick}
			>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
			</button>
			<nav className={styles.header__navigation} ref={navRef}>
				<ul className={styles.navigation__list} onClickCapture={onPageLeave}>
					{routes.map(({ id, path, name }) => (
						<li 
							key={id}
							className={pathname === path ? `${styles.navigation__item} ${styles.active__item}` : styles.navigation__item} 
						>
							<Link href={path} className={styles.navigation__link}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
