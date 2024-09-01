import { Metadata } from "next";
import { Rokkitt } from "next/font/google";
import Navbar from "@/components/Navbar";
import navbar from "@/data/navbar.json";
import "./global.css";

export const metadata: Metadata = {
    title: "Nick Musey",
    description: "Nick Musey is a full-stack developer from British Columbia, Canada.",
    viewport: "width=device-width, initial-scale=1"
}

type Props = {
    children: React.ReactNode
}

const rokkittFont = Rokkitt({
    subsets: ['latin'],
    variable: '--font-rokkitt'
});

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className="h-full w-full">
        <head>
            <link rel="icon" href="/favicon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className="h-full w-full">
            <Navbar links={ navbar }/>
            <main className={`${rokkittFont.variable} font-serif h-screen w-screen flex justify-center px-16`}>
                {props.children}
            </main>
        </body>
    </html>
  )
}
