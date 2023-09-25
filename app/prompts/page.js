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

      <div className="text-description">find art, prompts, styles</div>

      <span className="soon">søøn..</span>

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
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={60}
          height={60}
          sizes="100vw"
          priority
        />
      </div>
    </main>
  );
};

export default App;
