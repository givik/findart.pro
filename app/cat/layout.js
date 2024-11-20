// appcat/layout.js
'use client'; // Mark this as a client-side component

import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import Link from 'next/link';
import { Suspense } from 'react';
// import Search from '../../components/search/search';

import styles from './styles.css';

const TabsLayout = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  const cats = [
    { label: 'Anime, Anthromorph', path: '/cat/Anime,Anthromorph' },
    { label: 'Cartoons, Comics', path: '/cat/Cartoons,Comics' },
    { label: 'Characters', path: '/cat/Characters' },
    { label: 'Creatures', path: '/cat/Creatures' },
    { label: 'Games', path: '/cat/Games' },
    { label: 'Landscapes', path: '/cat/Landscapes' },
    { label: 'Mediums, Techniques', path: '/cat/Mediums,Techniques' },
    { label: 'Misc', path: '/cat/Misc' },
    { label: 'Paintings', path: '/cat/Paintings' },
    { label: 'Photohgraphers', path: '/cat/Photographers' },
    { label: 'Print Media', path: '/cat/Print-Media' },
    { label: 'Sci-fi', path: '/cat/Sci-fi' },
    { label: 'Styles', path: '/cat/Styles' },
    { label: 'Time Periods Fashion', path: '/cat/Time-Periods-Fashion' },
  ];

  return (
    <div>
      <div>
        {/* <Suspense>
          <Search />
        </Suspense> */}
      </div>
      <div
        style={{
          cursor: 'pointer',
          marginBottom: '20px',
          maxWidth: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '21px',
        }}
      >
        {cats.map((cat) => (
          <Link
            key={cat.path}
            href={cat.path}
            className="tab-name"
            style={{
              borderBottom: pathname === cat.path ? '2px solid blue' : 'none',
              color: pathname === cat.path ? 'blue' : 'black',
              margin: '10px',
            }}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Render Content for Active Tab */}
      <div>{children}</div>
    </div>
  );
};

export default TabsLayout;
