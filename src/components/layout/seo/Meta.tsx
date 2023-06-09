import { PropsWithChildren } from 'react';
import Head from 'next/head';
import type { MetaData } from '@data/types/seo.type';

const getTitle = (title: string) => `Duck Media | ${title}`

export const Meta = ({ children, title, description }: PropsWithChildren<MetaData>) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				<meta name="desciption" content={description} />
				<meta name="og:title" content={getTitle(title)} />
				<meta name="og:desciption" content={description} />
			</Head>
			{children}
		</>
	)
}