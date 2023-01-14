import { Libre_Franklin } from '@next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const libreFranklin = Libre_Franklin({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={libreFranklin.className}>
      <Component {...pageProps} />
    </main>
  );
}
