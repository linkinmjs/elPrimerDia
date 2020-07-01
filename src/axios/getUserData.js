import instanceGeoIp from "./instance-geoip";

export const getDataUser = async () => {
  const response = await instanceGeoIp.get();
  return response.data;
};
