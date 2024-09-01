import generateRssFeed from '@/helpers/rss';
import Link from 'next/link';

export default async function Home() {
    await generateRssFeed();

    return (
        <div className="h-screen flex flex-col justify-evenly align-middle">
            <h1 className="text-center">Hi, I&apos;m Nick Musey.</h1>
            <h2 className="text-center">I am a full-stack developer from British Columbia, Canada.</h2>
            <Link href="/projects"><h6 className="text-center">You can view some past projects of mine here.</h6></Link>
        </div>
    )
}
