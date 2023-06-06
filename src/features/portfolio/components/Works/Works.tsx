import { useContext, MouseEvent } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';
import { works } from '../../utils';
import { WorkCard } from './WorkCard/WorkCard';
import styles from './Works.module.scss';

export const Works = () => {
	const { activeCategory, updateFeaturedWork } = useContext(PortfolioContext);

	const filteredCards = activeCategory === 'Все' ? works : works.filter(item => item.category === activeCategory);

	const onChooseWork = (event: MouseEvent<HTMLDivElement>) => {
		const el = event.target as HTMLElement
		const workEl = el.closest('[data-workid]') as HTMLDivElement | null
		
		if (workEl && workEl.dataset?.workid) {
			const work = works.find(({ id }) => id === +workEl.dataset.workid!)
			if (work) updateFeaturedWork(work)
		}

	}

	return (
		<div className={styles.works}
			onClick={onChooseWork}
		>
			{filteredCards.map(({ src, id}) => (
				<div key={id}><WorkCard src={src} id={id} /></div>
			))}
		</div>
	)
}