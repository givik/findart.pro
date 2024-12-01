'use client';
import Link from 'next/link';
import TabsLayout from './cat/layout';

const App = () => {
  const onLogoClick = () => {};

  return (
    <main>
      <TabsLayout />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ height: '80px' }}>
        <path
          d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z"
          style={{ fill: '#ff891a' }}
          data-name="Up"
        />
      </svg>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sf_o-u06aSQ?si=sx5lHGVOVKTUdXni"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </main>
  );
};

export default App;
