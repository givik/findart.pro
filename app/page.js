'use client';
import Image from 'next/image';
import Search from '../components/search/search';

const App = () => {
  const onLogoClick = () => {};

  return (
    <main>
      <div id="container">
        <Image
          id="logo"
          src="/FindArt.pro.svg"
          alt="FindArt.pro Logo"
          width={400}
          height={100}
          sizes="100vw"
          priority
          onClick={onLogoClick}
        />
      </div>
      <Search onLogoClick />
    </main>
  );
};

export default App;
