import { CategoriesSelector } from "./CategoriesSelector/CategoriesSelector";
import { FeaturedWork } from "./FeaturedWork/FeaturedWork";
import { PortfolioContextProvider } from "../context/PortfolioContext";
import { Works } from "./Works/Works";
import styles from "./PortfolioWorks.module.scss";

export const PortfolioWorks = () => {
	return (
		<div className={styles.portfolioWorks}>
			<PortfolioContextProvider>
				<CategoriesSelector />
				<Works />
				<FeaturedWork />
			</PortfolioContextProvider>
		</div>
	);
};