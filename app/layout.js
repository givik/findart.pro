import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import './styles.css';
import Header from '../components/header';
import Footer from '../components/footer';

import Hotjar from '@hotjar/browser';

const siteId = 5226468;
const hotjarVersion = 6;

export const metadata = {
  title: 'FindArt.pro',
  description: 'Find art prompts.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children: Content }) {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9123253083798474"></meta>
        <link rel="icon" type="image/x-icon" href="fav.png"></link>
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
