import Layout from "@layout/index";
import PortfolioWorks from "@features/portfolio";

import styles from "@styles/views/Portfolio.module.scss";

export default function PortfolioPage() {
	return (
		<Layout>
			<div className={styles.portfolio}>
				<PortfolioWorks />
			</div>
		</Layout>
	);
}