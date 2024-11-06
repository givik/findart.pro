'use client';
import Image from 'next/image';
import Search from '../components/search/search';

const App = () => {
  const onLogoClick = () => {};

  return (
    <main>
      <Search onLogoClick />
      <div id="container">Have faith in 𝕵𝖊𝖘𝖚𝖘</div>
      <br />
    </main>
  );
};

export default App;
