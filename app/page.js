'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const schema = {
  city: 'string',
  lat: 'string',
  lng: 'string',
  country: 'string',
  iso2: 'string',
  admin_name: 'string',
  capital: 'string',
  population: 'string',
  population_proper: 'string',
};

const App = () => {
  return (
    <main>
      <div id="item">
        <div className="poster">
          <img width="120" src="https://image.tmdb.org/t/p/w500/z2iuBcwznen3kC9z4LeOzBSz1BB.jpg" />
        </div>
        <div className="about">
          <div>
            <strong>id: </strong>460071
          </div>
          <div>
            <strong>title: </strong>Lizzie
          </div>
          <div className="overview">
            <strong>overview: </strong> Massachusetts, 1892. An unmarried woman of 32 and a social
            outcast, Lizzie lives a claustrophobic life under her father's cold and domineering
            control. When Bridget Sullivan, a young maid, comes to work for the family, Lizzie finds
            a sympathetic, kindred spirit, and a secret intimacy soon blossoms into a wicked plan.
          </div>
          <div>
            <strong>genres: </strong>Crime, Drama, Thriller
          </div>
          <div>
            <strong>release_date: </strong>1536883200
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
