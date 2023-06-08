import { PortfolioContextProvider } from '../context/PortfolioContext';
import { CategoriesSelector } from './CategoriesSelector/CategoriesSelector';
import { Works } from './Works/Works';
import { FeaturedWork } from './FeaturedWork/FeaturedWork';
import styles from './PortfolioWorks.module.scss';

export const PortfolioWorks = () => {
	return (
		<div className={styles.portfolioWorks}>
			<PortfolioContextProvider>
				<CategoriesSelector />
				<Works />
				<FeaturedWork />
			</PortfolioContextProvider>
		</div>
	)
}