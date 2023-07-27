import Layout from "@layout/index";
import benefits from "@data/benefits.json";

import styles from "@styles/views/Home.module.scss";

export default function HomePage() {
	return (
		<Layout>
			<div className={styles.homepage}>
				<div className={styles.homepage__container}>
					<p className={styles.homepage__intro}>Мы создаем:</p>
					<div className={styles.homepage__benefits}>
						{benefits.map(({benefit, id}) => id === 1
							? (
								<h1 key={id} className={styles.benefits__item}>
									{benefit}
								</h1>
							) : (
								<p key={id} className={styles.benefits__item}>
									{benefit}
								</p>	
							)
						)}
					</div>
				</div>
			</div>
		</Layout>
	)
}