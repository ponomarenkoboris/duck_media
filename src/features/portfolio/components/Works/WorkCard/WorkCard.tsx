import { memo } from 'react';
import Image from 'next/image'
import type { Work }  from '../../../utils'

const Card = ({ src }: Pick<Work, 'src'>) => {
	return (
		<div className="work-card">
			<Image 
				src={src}
				alt='Work example'
				height={407}
			/>
		</div>
	)
}

export const WorkCard = memo(Card)