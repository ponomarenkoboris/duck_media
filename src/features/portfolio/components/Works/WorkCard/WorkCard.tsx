import Image from "next/image";
import type { Work } from "@data/types/works.type";
import { memo } from "react";
import styles from "./WorkCard.module.scss";

const Card = ({ src, id }: Omit<Work, "category" | "name">) => {
	return (
		<div className={styles.workCard} data-workid={id}>
			<Image 
				className={styles.workCard__image}
				src={src}
				alt='Work example'
				width={359}
				height={359}
				priority
				style={{ 
					width: "auto", 
					height: "auto" 
				}}
			/>
		</div>
	);
};

export const WorkCard = memo(Card);