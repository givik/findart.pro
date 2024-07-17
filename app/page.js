'use client';
import Image from 'next/image';
import Search from '../components/search/search';

const App = () => {
  const onLogoClick = () => {};

  return (
    <main>
      <Search onLogoClick />
      <div id="container">Pray when you have bad time</div>
      <br />
    </main>
  );
};

export default App;
