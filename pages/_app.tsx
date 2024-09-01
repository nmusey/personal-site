import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Rokkitt} from "next/font/google";
import Navbar from "@/components/Navbar";
import navbar from "@/data/navbar.json";

const rokkittFont = Rokkitt({
    subsets: ['latin'],
    variable: '--font-rokkitt'
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar links={ navbar }/>
            <main className={`${rokkittFont.variable} font-serif h-screen w-screen flex justify-center px-16`}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
