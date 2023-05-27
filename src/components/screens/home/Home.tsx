import Layout from '@/components/layout/layout/Layout'
import styles from './Home.module.scss'

export default function Home() {
	return (
		<Layout>
			<div className={styles.homepage}>
				<div className={styles.homepage__container}>
					<p className={styles.homepage__intro}>Мы создаем:</p>
					<div className={styles.homepage__benefits}>
						<h1 className={styles.benefits__item}>Успех</h1>
						<p className={styles.benefits__item}>Рост</p>
						<p className={styles.benefits__item}>Прибыль</p>
						<p className={styles.benefits__item}>Вовлеченность</p>
						<p className={styles.benefits__item}>Инновации</p>
						<p className={styles.benefits__item}>Конкурентоспособность</p>
						<p className={styles.benefits__item}>Репутация</p>
						<p className={styles.benefits__item}>Лояльность к бренду</p>
						<p className={styles.benefits__item}>Эффективность</p>
						<p className={styles.benefits__item}>Качество</p>
						<p className={styles.benefits__item}>Клиентов</p>
						<p className={styles.benefits__item}>Безопасность</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}