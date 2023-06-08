import Layout from '@components/layout/layout/Layout'
import { PortfolioWorks } from '@features/portfolio'
import styles from './Portfolio.module.scss'

export default function Portfolio() {
	return (
		<Layout>
			<div className={styles.portfolio}>
				<PortfolioWorks />
			</div>
		</Layout>
	)
}