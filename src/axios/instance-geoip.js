import axios from "axios";

const instanceGeoIp = axios.create({
  baseURL: "https://json.geoiplookup.io/",
});

export default instanceGeoIp;
