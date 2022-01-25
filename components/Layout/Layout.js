import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <main className=" max-w-screen-2xl m-auto px-8 pt-8 prose prose-invert">
            <Head>
                <title>Understanding Social Media Interaction</title>
                <meta name="description" content="How can we better improve the experience of giving and receiving on social media?" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            {children}
        </main>
    )
}
export default Layout