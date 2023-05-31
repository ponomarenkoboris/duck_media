import { CategoryContextProvider } from '../context/CategoryContext';
import { CategoriesSelector } from './CategoriesSelector/CategoriesSelector';
import { Works } from './Works/Works';
import styles from './PortfolioWorks.module.scss';

export const PortfolioWorks = () => {
	return (
		<CategoryContextProvider>
			<CategoriesSelector />
			<Works />
		</CategoryContextProvider>
	)
}