import React, { useEffect, useState } from "react";
import { getCountryByRegion } from "../services/ServiceCountry";

type FlagsProps = {
  region: string;
};

const Flags: React.FC<FlagsProps> = ({ region }) => {
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const countries = await getCountryByRegion(`asia`);
      setCountries(countries);
    };
    fetch();
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12">
      {countries.map((data, key) => (
        <div key={key}>{data.name.official}</div>
      ))}
    </div>
  );
};

export default Flags;
