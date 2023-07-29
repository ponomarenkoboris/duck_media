import Image from "next/image";
import Layout from "@layout/index";

import aboutContent from "@data/about.json";

import styles from "@styles/views/About.module.scss";

export default function AboutPage() {
	return (
		<Layout>
			<div className={styles.about}>
				<div className={styles.about__container}>
					<div className={styles.about__imageWrapper}>
						<Image
							className={styles.about__image}
							src={aboutContent.src}
							alt='О нас'
							height={534}
							width={534}
						/>
					</div>
					<p className={styles.about__text}>{aboutContent.text}</p>
				</div>
			</div>
		</Layout>
	);
}