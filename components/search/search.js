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
        const newIndex = new Index({ tokenize: 'forward', enrich: true });
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
      const res = await fetch('data/Mj Artist Influence Reference Sheets/Cartoons, Comics.json', {
        next: { revalidate: 99999 },
      });
      const arrayRes = await res.json();

      arrayRes.forEach((item, curIndex) => {
        data[curIndex] = item;
        if (index) {
          index.add(parseInt(curIndex), item.category);
          index.add(parseInt(curIndex), item.artist);
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
        {results.map((result, index) => {
          const item = data[result];
          const keys = Object.keys(item);
          const id = 'id' + Math.random().toString(16).slice(2);

          const isImage = (filePath) => {
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];

            return imageExtensions.some((extension) => filePath.toLowerCase().endsWith(extension));
          };

          if (data[result]) {
            return (
              <div className="item" key={id}>
                {keys.map((key) => (
                  <div key={key}>
                    {/* {key}: {item[key]} */}
                    {isImage(item[key]) && (
                      <span className="poster">
                        <div style={{ width: '100px' }}>{key}</div>
                        {data[result].image && (
                          <Image
                            width={120}
                            height={155}
                            unoptimized={true}
                            placeholder="blur"
                            blurDataURL="/fav.png"
                            alt={data[result].category}
                            src={'data/' + item[key]}
                            sizes="100vw"
                          />
                        )}
                      </span>
                    )}
                    {/* <div className="about">
                      <div>
                        <strong>{data[result].category}</strong>
                      </div>
                      <div>
                        <a href={data[result].link} target="_blank">
                          <strong>{data[result].artist}</strong>
                        </a>
                      </div>
                    </div> */}
                  </div>
                ))}
                {/* <div className="poster">
                  {data[result].image && (
                    <Image
                      width={120}
                      height={155}
                      unoptimized={true}
                      alt={data[result].category}
                      src={'data/' + data[result].image}
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
                  <div>
                    <a href={data[result].link} target="_blank">
                      <strong>{data[result].artist}</strong>
                    </a>
                  </div>
                </div> */}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Search;
