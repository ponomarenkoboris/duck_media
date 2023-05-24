import { MouseEvent, useCallback } from 'react';
import { useRouter } from 'next/router';
import { routes } from './header.utils';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	const { pathname, push } = useRouter()
	
	// TODO complete page intro and leave logic
	const onLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		// const body = document.querySelector('body')!
		// body.classList.toggle('page-leave')
		setInterval((href) => { push(href) }, 2000, event.currentTarget.href)		
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className='header__logo-wrapper'></div>
				<nav className='header__navigation'>
					<ul className={styles.navigation__list}>
						{routes.map(({ id, path, name }) => (
							<li 
								key={id}
								className={pathname === path ? `${styles.navigation__item} ${styles.active__item}` : styles.navigation__item} 
							>
								<Link href={path} onClick={onLinkClick} className={styles.navigation__link}>{name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
