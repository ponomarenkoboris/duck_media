import Layout from '@components/layout/layout/Layout'
import { ContactsForm } from '@features/contacts'
import styles from './Contacts.module.scss'

export default function Contacts() {
	return (
		<Layout>
			<div className={styles.contacts}>
				<div className={styles.contacts__info}>
					<h1 className={styles.info__title}>Contact</h1>
					<p className={styles.info__description}>
						Ordinary science uses terms and laws of that very science to continue the research, 
						uniting with the others in very rare cases. 
						Philosophy gets into the sense of every science trying to achieve results.
					</p>
					<p className={styles.info__description}>
						I also can not call philosophy a supra-science, 
						for it also uses hypothesis and arguments to state the opinion. 
						But there is the obvious thing: there are now laws in philosophy and 
						never will be, for the science changes with the age, the needs, 
						beliefs and requirements of the citizens.
					</p>
				</div>
				<ContactsForm />
			</div>
		</Layout>
	)
}