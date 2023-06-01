import { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';
import styles from './FeaturedWork.module.scss';

export const FeaturedWork = () => {
	const { featuredWork, updateFeaturedWork } = useContext(PortfolioContext);

	const onCloseShowreal = () => updateFeaturedWork(null)

	return featuredWork && (
		<div id='work-showreal' className={styles.visible}>
			<h1>FeaturedWork</h1>
			<button onClick={onCloseShowreal} className={styles.close__showreal}>Close</button>
		</div>
	)
}