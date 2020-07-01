import React,{Fragment, useState, useEffect} from 'react';
import Calendar from './components/Calendar';
import Debug from './components/Debug';

import './App.css';

function App() {

  const [countryName, setCountryName] = useState({});
  const [countryCode, setCountryCode] = useState({});


  return (
    <Fragment>
      <Calendar/>
      <Debug/>
    </Fragment>
  );
}

export default App;
