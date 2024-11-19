'use client';
import React, { useEffect, useState, useRef } from 'react';

const Tab1Page = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        // Replace with the correct URL to your HTML file
        const res = await fetch('/data/Anime,Anthromorph.htm'); // If it's in the public folder
        const html = await res.text(); // Get HTML as text
        setHtmlContent(html); // Store the HTML content in the state
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtml();
  }, []);

  return (
    <div id="content">
      {data.forEach((element) => {
        console.log(element);
      })}
      {/* {Object.keys(data).forEach((outerKey) => {
        console.log('hi');
        const innerObject = data[outerKey];
        console.log(innerObject);

        Object.keys(innerObject).forEach((innerKey) => {
          console.log(
            `Outer Key: ${outerKey}, Inner Key: ${innerKey}, Value: ${innerObject[innerKey]}`
          );
        });
      })} */}
      {/* {data.map((key) => {
        const item = data[key].name;
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
                        <div className="item-col-img-prompt">{key}</div>
                        {data[result].image ? (
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
                        )}
                      </span>
                    );
                })}
            </div>
          );
        }
      })} */}
    </div>
  );
};

export default Tab1Page;
