import { Inter } from 'next/font/google';
import './styles.css';
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
  title: 'FindArt.pro',
  description: 'Find art like a pro.',
};

// export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children: Content }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" sizes="any" />
        <meta name="google-adsense-account" content="ca-pub-9123253083798474"></meta>
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
