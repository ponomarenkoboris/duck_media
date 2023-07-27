import Layout from "@layout/index";
import ContactsForm from "@features/contacts";

import styles from "@styles/views/Contacts.module.scss";

export default function ContactsPage() {
	return (
		<Layout>
			<div className={styles.contacts} id='contacts'>
				<div className={styles.contacts__info}>
					<h1 className={styles.info__title}>Работаем круглосуточно</h1>
					<p className={styles.info__description}>
						Наше медиагентство сможет помочь вам реализовать ваши идеи! 
						Заполните форму и мы свяжемся с вами в ближайшее время. 
					</p>
					<p className={styles.info__description}>
					Наша команда экспертов готова помочь вам создать качественный контент и донести его до вашей аудитории. 
					</p>
				</div>
				<ContactsForm />
			</div>
		</Layout>
	)
}