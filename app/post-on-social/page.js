'use client';
import { useEffect } from 'react';
import { series } from 'async';
const { exec } = require('child_process');

//! need work
series([() => exec('npm run dev'), () => exec('npm run test')]);

const App = () => {
  useEffect(() => {
    // do something
  }, []);

  return <div>ok</div>;
};

export default App;
