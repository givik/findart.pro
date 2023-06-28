import { Inter } from 'next/font/google';
import './styles.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'FindArt.pro',
  description: 'Find art like a pro.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div id="site">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
