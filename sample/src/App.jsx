import React, { useState } from 'react';
import initialData from './initialData.js';
import './App.scss';

function App() {
  const [ data, setData ] = useState(initialData);

  return (
    <div>
      Test
    </div>
  );
};

export default App;
