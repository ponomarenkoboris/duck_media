import { useContext, useState, MouseEvent } from 'react';
import { CategoryContext } from '../../context/CategoryContext';
import { categories } from '../../utils';
import styles from './CategoriesSelector.module.scss';

export const CategoriesSelector = () => {
	const { activeCategory, setActivCategory } = useContext(CategoryContext);
	const [ isShownSelectors, setIsShownSelectors ] = useState<boolean>(false);

	const onToggleCategories = () => setIsShownSelectors(!isShownSelectors);

	const onCetegoryContainerClick = (event: MouseEvent<HTMLDivElement>) => {
		const categoryEl = (event.target as HTMLElement).closest(`.${styles.categoriesList__item}`) as HTMLElement | null;

		if (categoryEl?.dataset && categoryEl.dataset?.role) {
			setActivCategory(categoryEl.dataset.role)
		} 

		onToggleCategories()
	}


	return (
		<div className={styles.categories}>
			<button onClick={onToggleCategories} className={styles.categories__controller}>Категории</button>
			{isShownSelectors && (
				<div onClick={onCetegoryContainerClick} className={styles.categories__categoriesListContainer}>
					<ul className={styles.categoriesList}>
						{categories.map(({ id, category }) => (
							<li key={id} className={styles.categoriesList__item} data-role={category}>
								<p className={category === activeCategory ? `${styles.category__name} ${styles.active__name}` : styles.category__name}>{category}</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}