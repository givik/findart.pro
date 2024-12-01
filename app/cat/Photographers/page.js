'use client';
import React, { useEffect, useState } from 'react';

const Tab1Page = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHtmlInChunks = async () => {
      try {
        const res = await fetch('/data/Photographers.htm'); // Path to your HTML file
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let html = '';

        // Read chunks of data from the stream
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          html += decoder.decode(value, { stream: true });

          // Optionally, you can show partial content as it's being fetched
          setHtmlContent(html); // Update the state with the loaded content
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching HTML:', error);
        setLoading(false);
      }
    };

    fetchHtmlInChunks();
  }, []);

  return (
    <div>
      {loading ? <p style={{ color: 'red' }}>Loading... Please Wait...</p> : null}
      <div
        style={{
          overflow: 'auto', // Enable scrolling
          height: '100vh',
          border: '1px solid #ccc',
          paddingBottom: '100px',
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Tab1Page;
