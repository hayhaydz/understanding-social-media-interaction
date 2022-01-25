import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <main className=" max-w-screen-2xl m-auto px-4 md:px-8 pt-8 prose prose-invert">
            <Head>
                <title>Understanding Social Media Interaction</title>
                <meta name="description" content="How can we better improve the experience of giving and receiving on social media?" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4900d8" />
                <meta name="msapplication-TileColor" content="#130d23" />
                <meta name="theme-color" content="#ffffff" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            {children}
        </main>
    )
}
export default Layout