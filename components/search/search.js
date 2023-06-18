'use client';
import { useEffect, useState } from 'react';
import { Index } from 'flexsearch';
import { encode, rtl } from './dist/module/lang/latin/extra.js';

let data = {};

const Search = () => {
  const [index, setIndex] = useState(new Index({ encode: encode }));
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //  fetch data to search
      const res = await fetch('/movies.json');
      const arrayRes = await res.json();

      console.log('%c fetching done ', 'color: orange');

      arrayRes.forEach((item, curIndex) => {
        data[curIndex + 1] = { id: parseInt(curIndex + 1), title: item.title };
        //  When the component first loads, we need to iterate
        // through data values and add each to the search index.
        setIndex(index.add(parseInt(curIndex + 1), item.title));
      });

      setLoading(false);

      console.log('%c iteration done ', 'color: grey');
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    setResults(index.search(query));
  }, [query]);

  return (
    <div>
      {/* {loading && (
        <div>
          <i>loading</i>
        </div>
      )} */}
      <input
        value={query}
        placeholder={loading ? 'loading...' : 'Search'}
        disabled={loading}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {results.map((result) => {
          if (data[result]) return <li key={result}>{data[result].title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
