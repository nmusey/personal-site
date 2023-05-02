import {Html, Head, NextScript, Main} from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full w-full">
      <Head>
            <meta name="description" content="Nick Musey is a full-stack developer from British Columbia, Canada." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="h-full w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
