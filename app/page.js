'use client';
import Image from 'next/image';
import Search from '@/components/search';

const App = () => {
  return (
    <main>
      <div id="logo-container">
        <Image
          id="logo"
          src="/FindArt.pro.svg"
          alt="FindArt.pro Logo"
          width={400}
          height={100}
          sizes="100vw"
          priority
        />
      </div>

      <Search />

      <span className="soon">
        <div className="companies">
          <Image
            className="logo"
            src="/cloudflare.svg"
            alt="Cloudflare Logo"
            width={60}
            height={65}
            sizes="100vw"
            priority
          />
        </div>
      </span>
    </main>
  );
};

export default App;
