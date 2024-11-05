'use client';
import { useEffect, useState, useRef } from 'react';
import { Index } from 'flexsearch';
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

let data = {};

// var prevScrollpos = window.scrollY;
// window.onscroll = function () {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('navbar').style.top = '0';
//   } else {
//     document.getElementById('navbar').style.top = '-50px';
//   }
//   prevScrollpos = currentScrollPos;
// };

const Search = ({ onLogoClick }) => {
  const [index, setIndex] = useState(
    new Index({
      tokenize: 'forward',
    })
  );
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const inputRef = useRef(null);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    // You can now use the current URL
    setQuery(searchParams.get('query'));
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!loading) {
      inputRef.current.focus();
    }
  }, [loading]);

  // onLogoClick(router.push('?q=' + e.target.value));

  useEffect(() => {
    const fetchData = async () => {
      //  fetch data to search
      const res = await fetch('/data.json', {
        next: { revalidate: 99999 },
      });
      const arrayRes = await res.json();

      // console.log('%c fetching done ', 'color: orange');

      arrayRes.forEach((item, curIndex) => {
        data[curIndex] = item;

        //  When the component first loads, we need to iterate
        // through data values and add each to the search index.
        setIndex(index.add(parseInt(curIndex), item.category));
      });

      // console.log('%c iteration done ', 'color: grey');

      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData().catch(console.error);
  }, [index]);

  useEffect(() => {
    if (query) setResults(index.search(query));
  }, [index, query]);

  return (
    <>
      <h1>hiii</h1>
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          router.push('?query=' + e.target.value);
        }}
        type="text"
        autoComplete="off"
        placeholder="Search"
        spellCheck="false"
        id="search_field"
      />
      <div id="content">
        {results.map((result) => {
          var id = 'id' + Math.random().toString(16).slice(2);

          if (data[result]) {
            return (
              <div className="item" key={id}>
                <div className="poster">
                  {data[result].image && (
                    <Image
                      width={200}
                      height={300}
                      unoptimized={true}
                      alt={data[result].category}
                      src={data[result].image}
                      placeholder="blur"
                      blurDataURL="/fav.png"
                      sizes="100vw"
                    />
                  )}
                </div>
                <div className="about">
                  <div>
                    <strong>{data[result].category}</strong>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Search;
