'use client';
import { useEffect, useState, useRef } from 'react';
import { Index } from 'flexsearch';
import Image from 'next/image';

let data = {};

const Search = () => {
  const [index, setIndex] = useState(
    new Index({
      tokenize: 'forward',
    })
  );
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      inputRef.current.focus();
    }
  }, [loading]);

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
    setResults(index.search(query));
  }, [index, query]);

  return (
    <>
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        autoComplete="off"
        placeholder="Search"
        spellCheck="false"
        id="search_field"
      />
      {results.map((result) => {
        var id = 'id' + Math.random().toString(16).slice(2);

        if (data[result]) {
          return (
            <div className="item" key={id}>
              <div className="poster">
                {data[result].image && (
                  <Image
                    width={120}
                    height={180}
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
    </>
  );
};

export default Search;
