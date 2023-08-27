'use client';
import { useEffect, useState, useRef } from 'react';
import { Index } from 'flexsearch';
import Image from 'next/image';

let data = {};

const Search = () => {
  const [index, setIndex] = useState(new Index({}));
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
      const res = await fetch('/movies.json', {
        next: { revalidate: 99999 },
      });
      const arrayRes = await res.json();

      console.log('%c fetching done ', 'color: orange');

      arrayRes.forEach((item, curIndex) => {
        data[curIndex] = item;
        //  When the component first loads, we need to iterate
        // through data values and add each to the search index.
        setIndex(index.add(parseInt(curIndex), item.title));
      });

      console.log('%c iteration done ', 'color: grey');

      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    setResults(index.search(query));
  }, [query]);

  return (
    <>
      <input
        ref={inputRef}
        value={query}
        //! TODO onChange={(e) => setQuery(e.target.value)}
        type="text"
        autoComplete="off"
        placeholder="Search"
        spellCheck="false"
        id="search_field"
      />
      {results.map((result) => {
        if (data[result]) {
          const timestamp = data[result].release_date * 1000;
          const date = new Date(timestamp);
          const year = date.getFullYear();

          let genres = [];
          for (let i = 0; i < data[result].genres.length; i++) {
            genres.push(
              <span key={data[result].genres[i]}>
                {data[result].genres[i]}
                {i !== data[result].genres.length - 1 && ', '}
              </span>
            );
          }

          return (
            <div className="item" key={data[result].id}>
              <div className="poster">
                <Image
                  width={120}
                  height={180}
                  unoptimized={true}
                  alt={data[result].title}
                  src={data[result].poster}
                  placeholder="blur"
                  blurDataURL="/fav.png"
                  sizes="100vw"
                />
              </div>
              <div className="about">
                <div>
                  <strong>{data[result].title}</strong>
                </div>
                <br />
                <div className="overview">{data[result].overview}</div>
                <br />
                <div>{year}</div>
                <br />
                <div>{genres}</div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Search;
