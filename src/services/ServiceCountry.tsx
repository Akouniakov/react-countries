export const getCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const resp = await fetch(url);
  if (!resp.json) {
    const msg = `An error has occured: ${resp.status}`;
    throw new Error(msg);
  }
  const body = await resp.json();
  return body;
};
export const getCountryByRegion = async (region: string) => {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    const msg = `An error has occured ${resp.status}`;
    throw new Error(msg);
  }
  const body = await resp.json();
  return body;
};
