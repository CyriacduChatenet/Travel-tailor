import type { AppProps } from 'next/app';
import '../styles/reset.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
			<Component {...pageProps} />
	);
}
