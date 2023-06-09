import Layout from '@components/layout/layout/Layout'
import clients from "@data/clients.json";
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
						{clients.map(({ id, list }) => (
							<div key={id} className={styles.list__column}>
								{list.map(({ id, name }) => (
									<li className={styles.list__item} key={id}>
										<p className={styles.client__name}>{name}</p>
									</li>
								))}
							</div>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	)
}