import Layout from '@components/layout/layout/Layout'
import styles from './Clients.module.scss'

export default function Clients() {
	return (
		<Layout>
			<div className={styles.clients__container}>
				<div className={styles.clients}>
					<div className={styles.clients__info}>
						<h4 className={styles.info__title}>Clients</h4>
						<p className={styles.info__text}>In my carreer I have had the pleasure to work with several great clients. Ordinary science operates with definitions, which are quite limited in their field of research. Ordinary science uses terms and laws of that very science to continue the research, uniting with the others in very rare cases. Philosophy gets into the sense of every science trying to achieve results.</p>
					</div>
					<ul className={styles.client__list}>
						<div className={styles.list__column}>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Canvas Group</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Citibank</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Google</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>The Guardian</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Hugo Boss</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>IAG Insurance</p>
							</li>
						</div>
						<div className={styles.list__column}>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Canvas Group</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>GBH</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Grey</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Handsome Brands</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Honour Branding</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>IDEO</p>
							</li>
						</div>
						<div className={styles.list__column}>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Karoshi</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>MerchantCantos</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>MultiAdaptor</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Spring In Alaska</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Spring Studios</p>
							</li>
						</div>
						<div className={styles.list__column}>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Levis</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>NZ Fire Service</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Panasonic Australia</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Puma</p>
							</li>
							<li className={styles.list__item}>
								<p className={styles.client__name}>Red Bull</p>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</Layout>
	)
}