'use client';
import Image from 'next/image';
import Search from '@/components/search/search';

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
    </main>
  );
};

export default App;
