import { memo } from 'react';
import Image from 'next/image'
import type { Work } from '../../../utils'
import styles from './WorkCard.module.scss';

const Card = ({ src, id }: Omit<Work, 'category' | 'name'>) => {
	return (
		<div className={styles.workCard} data-workid={id}>
			<Image 
				className={styles.workCard__image}
				src={src}
				alt='Work example'
				width={407}
				height={359}
			/>
		</div>
	)
}

export const WorkCard = memo(Card)