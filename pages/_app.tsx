import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Rokkitt} from "@next/font/google";

const rokkittFont = Rokkitt({
    subsets: ['latin'],
    variable: '--font-rokkitt'
});

export default function App({ Component, pageProps }: AppProps) {
    return <main className={`${rokkittFont.variable} font-serif h-screen w-screen`}><Component {...pageProps} /></main>;
}
