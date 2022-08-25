import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ja" prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/favicon/site.webmanifest"/>
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>

                    <meta name="description" content="施工管理で品質重視の信頼を獲得する" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="株式会社MIWA公式ホームページ" />
                    <meta property="og:description" content="施工管理で品質重視の信頼を獲得する" />
                    <meta property="og:url" content="index.html" />
                    <meta property="og:site_name" content="株式会社MIWA公式ホームページ" />
                    <meta property="og:image" content="/images/OGP.jpg" />
                    <meta property="og:image:secure_url" content="/images/OGP.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="施工管理で品質重視の信頼を獲得する" />
                    <meta name="twitter:title" content="株式会社MIWA公式ホームページ" />
                    <meta name="twitter:image" content="/images/OGP.jpg" />

                    <Script id="formrun" src="https://sdk.form.run/js/v2/formrun.js"/>
                    <link href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&display=swap" rel="stylesheet" />
                </Head>
                
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument;