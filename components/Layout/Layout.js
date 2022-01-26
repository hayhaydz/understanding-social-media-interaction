import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <main className=" max-w-screen-2xl m-auto px-4 md:px-8 pt-8 prose prose-invert">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
                <title>Understanding Social Media Interaction</title>
                <meta name="author" content="Haydon Curteis-Lateo" />
                <meta name="description" content="The way that we interact with social media today is poorly thought out and not tailored to how we interact in real life. The purpose of this research is to explore the different ways that we currently interact and look at new ways to improve how we interact and how it is received." />
                <link rel="canonical" href="https://usmi.cf/" /> 
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Understanding Social Media Interaction" />
                <meta name="twitter:description" content="The way that we interact with social media today is poorly thought out and not tailored to how we interact in real life. The purpose of this research is to explore the different ways that we currently interact and look at new ways to improve how we interact and how it is received." />
                <meta name="twitter:image:src" content="https://usmi.cf/seo_image.jpg" />
                <meta property="og:url" content="https://usmi.cf/" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Understanding Social Media Interaction" />
                <meta property="og:image" content="https://usmi.cf/seo_image.jpg" />
                <meta property="og:description" content="The way that we interact with social media today is poorly thought out and not tailored to how we interact in real life. The purpose of this research is to explore the different ways that we currently interact and look at new ways to improve how we interact and how it is received." />
                <meta property="og:site_name" content="Understanding Social Media Interaction" />
                <meta itemProp="name" content="Understanding Social Media Interaction." />
                <meta itemProp="description" content="The way that we interact with social media today is poorly thought out and not tailored to how we interact in real life. The purpose of this research is to explore the different ways that we currently interact and look at new ways to improve how we interact and how it is received." />
                <meta itemProp="image" content="https://usmi.cf/seo_image.jpg" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4900d8" />
                <meta name="msapplication-TileColor" content="#130d23" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            {children}
        </main>
    )
}
export default Layout