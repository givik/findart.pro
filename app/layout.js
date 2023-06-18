import { Inter } from 'next/font/google';
import Image from 'next/image';
import './styles.css';

import Search from '@/components/search';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FindArt.pro',
  description: 'Find art like a pro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div id="site">
          <Image
            id="logo"
            src="/FindArt.pro.svg"
            alt="FindArt.pro Logo"
            width={230}
            height={60}
            priority
          />
          <div id="form">
            <Search />
            <input
              type="text"
              autoFocus
              autoComplete="off"
              placeholder="Search"
              spellCheck="false"
              id="search_field"
            />
          </div>

          {children}

          <div>
            <Image
              className="logo"
              src="/next.svg"
              alt="Next.js Logo"
              width={60}
              height={60}
              priority
            />
            <Image
              className="logo"
              src="/cloudflare.svg"
              alt="Cloudflare Logo"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>
      </body>
    </html>
  );
}
