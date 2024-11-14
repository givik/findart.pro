'use client';
import Image from 'next/image';
import Search from '../components/search/search';

import { Suspense } from 'react';

const App = () => {
  const onLogoClick = () => {};

  return (
    <main>
      <Suspense>
        <Search />
      </Suspense>
      {/* <div id="container">Thank You</div> */}
      <br />
    </main>
  );
};

export default App;
