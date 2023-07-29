import { MouseEvent, useContext } from "react";
import Image from "next/image";
import { PortfolioContext } from "../../context/PortfolioContext";
import styles from "./FeaturedWork.module.scss";

export const FeaturedWork = () => {
	const { featuredWork, updateFeaturedWork, changeFeaturedWork } = useContext(PortfolioContext);

	const showrealClickHandler = (event: MouseEvent<HTMLDivElement>) => {
		const target = event.target as HTMLElement;
		const control = target.closest("[data-controller]") as HTMLDivElement | HTMLButtonElement | null;

		if (control?.dataset.controller === "close") {
			updateFeaturedWork(null);
		} else if (control?.dataset.controller === "prev") {
			changeFeaturedWork("prev");
		} else if (control?.dataset.controller === "next") {
			changeFeaturedWork("next");
		} else {
			updateFeaturedWork(null);
		}
	};

	return featuredWork && (
		<div id='work-showreal' data-id={featuredWork.id} className={styles.workShowreal} onClick={showrealClickHandler}>
			<div className={styles.showreal__moblieControllers}>
				<button data-controller="prev" className={styles.mobile__controller}>
					<Image 
						src={"/portfolio/featuredWork/arrow.svg"}
						alt='Previous work'
						height={20}
						width={7.5}
					/>
				</button>
				<button data-controller="next" className={styles.mobile__controller}>
					<Image 
						src={"/portfolio/featuredWork/arrow.svg"}
						alt='Next work'
						height={20}
						width={7.5}
					/>
				</button>
				<button data-controller="close" className={styles.mobile__controller}>
					<Image 
						className={styles.close__icon}
						src={"/portfolio/featuredWork/cross.svg"}
						alt='Close'
						width={10}
						height={10}
					/>	
				</button>
			</div>
			<div className={styles.showreal__wrapper}>
				<button data-controller="close" className={styles.close__showreal}>
					<Image 
						className={styles.close__icon}
						src={"/portfolio/featuredWork/cross.svg"}
						alt='Close'
						width={10}
						height={10}
					/>
				</button>
				<div className={styles.showreal__container}>
					<Image 
						className={styles.showreal}
						src={featuredWork.src}
						alt={featuredWork.name}
						width={438}
						height={387}
					/>
					<div className={styles.showreal__controllers}>
						<div data-controller="prev" className={styles.showreal__controller}></div>
						<div data-controller="next" className={styles.showreal__controller}></div>
					</div>
					<p className={styles.work__name}>{featuredWork.name}</p>
				</div>
			</div>
		</div>
	);
};