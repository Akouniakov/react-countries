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
    <div>
      <ul>
        {countries.map((data, key) => (
          <li key={key}>{data.name.official}</li>
        ))}
      </ul>
    </div>
  );
};

export default Flags;
