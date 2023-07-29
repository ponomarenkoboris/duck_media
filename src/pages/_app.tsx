import App, { AppContext } from "next/app";
import type { AppProps } from "next/app";

import "@styles/globals.scss";

function DuckApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

DuckApp.getInitialProps = async (duckCtx: AppContext) => {
	const appProps = await App.getInitialProps(duckCtx);

	if (duckCtx.ctx.res?.statusCode === 404) {
		duckCtx.ctx.res.writeHead(301, { Location: "/" });
		duckCtx.ctx.res.end();
	}

	return appProps;
};

export default DuckApp;