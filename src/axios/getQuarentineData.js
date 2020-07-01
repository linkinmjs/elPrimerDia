import instanceGeoIp from "./instance-quarentine";

export const getQuarentineData = async () => {
  const response = await instanceGeoIp.get("/corona");
  return response.data;
};
