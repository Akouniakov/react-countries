import React, { useEffect, useState } from "react";
import { getCountryByRegion } from "../services/ServiceCountry";
import Flag from "./Flag";

type FlagsProps = {
  region: string;
};

const Flags: React.FC<FlagsProps> = ({ region }) => {
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const countries = await getCountryByRegion(region);
      setCountries(countries);
    };
    fetch();
  }, []);

  return (
    <div className="px-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {countries.map((data, key) => (
        <Flag name={data.name.official} flag={data.flags.svg} />
      ))}
    </div>
  );
};

export default Flags;
