import { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';
import { works } from '../../utils';
import { WorkCard } from './WorkCard/WorkCard';
import styles from './Works.module.scss';

export const Works = () => {
	const { activeCategory } = useContext(CategoryContext);

	const filteredCards = activeCategory === 'Все' ? works : works.filter(item => item.category === activeCategory);

	return (
		<div className="works">
			{filteredCards.map(({ id, src }) => (
				<div key={id}><WorkCard src={src} /></div>
			))}
		</div>
	)
}