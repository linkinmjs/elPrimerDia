import React, { useState, useEffect } from "react";
import { getQuarentineData } from "../../axios/getQuarentineData";

import Calendar from "../../components/Calendar/Calendar";
import Debug from "../Debug/Debug";

const Home = () => {
  const [quarentineData, setQuarentineData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getQuarentineData();
      setQuarentineData(data);
    };
    getData();
  }, []);

  return (
    <>
      <Calendar />
      <Debug />
    </>
  );
};

export default Home;
