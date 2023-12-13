'use client';
import { useEffect } from 'react';
import { series } from 'async';
const exec = require('child_process').exec;

const App = () => {
  series([() => exec('npm run render MyComp')]);

  return <div>ok</div>;
};

export default App;
