import { MouseEvent, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { routes, navBlurEvent } from './header.utils';
import Link from 'next/link';
import styles from './Header.module.scss';

interface HeaderProps {
	onListClick: (e: MouseEvent<HTMLUListElement>) => void
}

export default function Header({ onListClick }: HeaderProps) {
	const { pathname } = useRouter()
	const navRef = useRef<HTMLElement>(null)

	const { appendListener, removeListener } = navBlurEvent(navRef);

	const onMenuButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		if (!navRef.current) return

		if (!navRef.current.classList.contains(styles.showMenu)) {
			navRef.current.classList.remove(styles.hideMenu)
			navRef.current.classList.add(styles.showMenu)
			appendListener()
		} else {
			navRef.current.classList.remove(styles.showMenu)
			navRef.current.classList.add(styles.hideMenu)
			removeListener()
		}
	}

	useEffect(() => {
		return () => removeListener()
	}, [])

	return (
		<header className={styles.header}>
			<button 
				className={styles.header__menuButton}
				onClick={onMenuButtonClick}
			>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
			</button>
			<nav className={styles.header__navigation} ref={navRef}>
				<ul className={styles.navigation__list} onClickCapture={onListClick}>
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
	)
}
