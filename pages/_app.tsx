import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <html data-theme="dracula">
        <Component {...pageProps} />
      </html>
    </>
  );
}

export default MyApp;
