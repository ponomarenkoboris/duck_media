import { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import Header from "../header/Header";

const poppins = Poppins({
	weight: ['300', '400', '600', '700'],
	subsets: ['latin']
})

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className={poppins.className}>
			<Header />
			<main>
				{children}
			</main>
		</div>
	)
}