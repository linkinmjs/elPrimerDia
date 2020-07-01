import axios from "axios";

const instanceQuarentineData = axios.create({
  baseURL: "https://corona-api-days-quarentine.franmeriles.vercel.app/api",
});

export default instanceQuarentineData;
