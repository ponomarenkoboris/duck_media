import Layout from '@/components/layout/layout/Layout'
import styles from './Home.module.scss'

export default function Home() {
	console.log(styles)
	return (
		<Layout>
			<div className={styles.homepage}>
				<div className={styles.homepage__container}>
					<p className={styles.homepage__intro}>Мы создаем:</p>
					<div className={styles.homepage__benefits}>
						<h1 className={styles.benefits__item}>Успех</h1>
						<h1 className={styles.benefits__item}>Рост</h1>
						<h1 className={styles.benefits__item}>Прибыль</h1>
						<h1 className={styles.benefits__item}>Вовлеченность</h1>
						<h1 className={styles.benefits__item}>Инновации</h1>
						<h1 className={styles.benefits__item}>Конкурентоспособность</h1>
						<h1 className={styles.benefits__item}>Репутация</h1>
						<h1 className={styles.benefits__item}>Лояльность к бренду</h1>
						<h1 className={styles.benefits__item}>Эффективность</h1>
						<h1 className={styles.benefits__item}>Качество</h1>
						<h1 className={styles.benefits__item}>Клиентов</h1>
						<h1 className={styles.benefits__item}>Безопасность</h1>
					</div>
				</div>
			</div>
		</Layout>
	)
}