import { Inter } from 'next/font/google';
import './styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
// import { GA_TRACKING_ID } from '../lib/ga';

export const metadata = {
  title: 'FindArt.pro',
  description: 'Find art prompts.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children: Content }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9123253083798474"></meta>
        <link rel="icon" type="image/x-icon" href="fav.png"></link>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5J0LS2Y216"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-5J0LS2Y216');
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div id="site">
          <Header />
          {Content}
          <Footer />
        </div>
      </body>
    </html>
  );
}
