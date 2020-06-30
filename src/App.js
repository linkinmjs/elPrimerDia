import React,{useState, useEffect} from 'react';
import Calendar from './components/Calendar';
import axios from 'axios';


import './App.css';

function App() {

  const [countryName, setCountryName] = useState({});
  const [countryCode, setCountryCode] = useState({});

 

  return (
    <Calendar/>
  );
}

export default App;
