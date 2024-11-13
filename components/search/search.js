'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

let data = {};

const Search = ({ onLogoClick }) => {
  const [index, setIndex] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef(null);

  useEffect(() => {
    const initializeIndex = async () => {
      try {
        const { Index } = await import('flexsearch');
        const newIndex = new Index({ tokenize: 'forward' });
        setIndex(newIndex);
      } catch (error) {
        console.warn('FlexSearch Index instantiation failed:', error);
      }
    };

    initializeIndex();
  }, []);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    setQuery(searchParams.get('query'));
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!loading) {
      inputRef.current.focus();
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json', { next: { revalidate: 99999 } });
      const arrayRes = await res.json();

      arrayRes.forEach((item, curIndex) => {
        data[curIndex] = item;
        if (index) {
          index.add(parseInt(curIndex), item.category);
        }
      });

      setLoading(false);
    };

    if (index) {
      fetchData().catch(console.error);
    }
  }, [index]);

  useEffect(() => {
    if (query && index) {
      setResults(index.search(query));
    }
  }, [index, query]);

  return (
    <>
      <input
        ref={inputRef}
        value={query ? query : ''}
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
          const id = 'id' + Math.random().toString(16).slice(2);

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
