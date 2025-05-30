'use client'; // Mark this as a client-side component
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import Link from 'next/link';
import { useRef, useEffect, useState, Suspense } from 'react';
import Search from '../../components/search/search';
import Hotjar from '@hotjar/browser';

const siteId = 5226468;
const hotjarVersion = 6;

const Header = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname
  const headerRef = useRef(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);

    const updateHeight = () => {
      if (headerRef.current) {
        setSpacerHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight(); // Initial measure
    window.addEventListener('resize', updateHeight); // Update on resize
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

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
    { label: 'Photographers', path: '/cat/Photographers' },
    { label: 'Print Media', path: '/cat/Print-Media' },
    { label: 'Sci-fi', path: '/cat/Sci-fi' },
    { label: 'Styles', path: '/cat/Styles' },
    { label: 'Time Periods Fashion', path: '/cat/Time-Periods-Fashion' },
  ];

  return (
    <div>
      {/* <div>
        <Suspense>
          <Search />
        </Suspense>
      </div> 
      */}

      {/* HEADER */}
      <div
        ref={headerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'white',
          padding: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {cats.map((cat) => (
          <a
            key={cat.path}
            href={cat.path}
            style={{
              padding: '6px 12px',
              margin: '6px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: pathname === cat.path ? 'bold' : 'normal',
              backgroundColor: pathname === cat.path ? 'black' : 'white',
              color: pathname === cat.path ? 'white' : 'black',
            }}
          >
            {cat.label}
          </a>
        ))}
      </div>

      {/* SPACER to push content below header */}
      <div style={{ height: spacerHeight }} />

      {/* CONTENT */}
      <div>{children}</div>
    </div>
  );
};

export default Header;
