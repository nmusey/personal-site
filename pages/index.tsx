import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
        <Head>
            <title>Nick Musey</title>
            <meta name="description" content="Nick Musey is a full-stack developer from British Columbia, Canada." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>

        <div className="h-screen flex flex-col justify-evenly align-middle">
            <h1 className="text-center">Hi, I&apos;m Nick Musey.</h1>
            <h2 className="text-center">I am a full-stack developer from British Columbia, Canada.</h2>
            <Link href="/projects"><h6 className="text-center">You can view some past projects of mine here.</h6></Link>
            <Link href="/blog"><h6 className="text-center">You can view my blog here.</h6></Link>
        </div>
        </>
    )
}
