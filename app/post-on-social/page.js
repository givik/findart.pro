'use client';
import { useEffect } from 'react';
import { series } from 'async';
const { exec } = require('child_process');

const App = () => {
  useEffect(() => {
    //! need work
    series([() => exec('npm run build video')]);
  }, []);

  return <div>ok</div>;
};

export default App;
