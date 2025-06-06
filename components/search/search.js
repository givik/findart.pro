'use client';
import React, { useEffect, useState, useRef } from 'react';
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
      const res = await fetch('data_new.json', {
        next: { revalidate: 99999 },
      });
      const arrayRes = await res.json();

      arrayRes.forEach((item, curIndex) => {
        data[curIndex] = item;
        if (index) {
          index.add(parseInt(curIndex), item.category);
          // index.add(parseInt(curIndex), item.artist);
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

  // Memoized RenderImage component
  const RenderImage = React.memo(({ width, height, src, alt, className }) => (
    <Image
      width={width}
      height={height}
      unoptimized={true}
      placeholder="blur"
      blurDataURL="/fav.png"
      alt={alt}
      src={src}
      sizes="100vw"
      className={className}
    />
  ));

  RenderImage.displayName = 'RenderImage';

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
                <div className="about">
                  <div className="category-title">{data[result].category}</div>
                  <div className="artist-title">
                    <a href={data[result].link} target="_blank">
                      {data[result].artist}
                    </a>
                  </div>
                </div>
                {console.log('keys', keys)}
                {/* //! HERE GOES !// */}
                {keys
                  // .slice()
                  // .reverse()
                  .map((key, index) => {
                    const value = data[result][key];
                    const category = data[result]?.category;

                    const isImageValue = isImage(value);
                    const imageAlt = category;
                    let imageSrc = null;

                    if (isImageValue) imageSrc = `data/${value}`;

                    // Reuse defaultDimensions for non-photographers
                    const imageDimensions =
                      category === 'Photographers'
                        ? { width: 580, height: 145 }
                        : { width: 120, height: 180 };

                    // console.log('\nkey', key, '\nitem[key]', item[key]);
                    if (isImageValue)
                      return (
                        <span key={key} className="poster">
                          <RenderImage
                            className="artist-img"
                            width={imageDimensions.width}
                            height={imageDimensions.height}
                            src={imageSrc}
                            alt={imageAlt}
                          />
                          <div className="item-col-img"></div>
                          {/* <div className="item-col-img-prompt">{key}</div>

                          {/* {data[result].image ? (
                          <>
                            <div className="item-col-img">
                              <RenderImage
                                className="artist-img"
                                width={imageDimensions.width}
                                height={imageDimensions.height}
                                src={imageSrc}
                                alt={imageAlt}
                              />
                            </div>
                            <div className="item-col-img-prompt">{key}</div>
                          </>
                        ) : (
                          <>
                            <div className="item-col-img">
                              <RenderImage
                                width={imageDimensions.width}
                                height={imageDimensions.height}
                                src={imageSrc}
                                alt={imageAlt}
                              />{' '}
                            </div>
                            <div className="item-col-img-prompt">{key}</div>
                          </>
                        )} */}
                        </span>
                      );
                  })}
                {/* //! HERE GOES !// */}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Search;
