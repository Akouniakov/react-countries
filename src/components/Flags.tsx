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
      const countries = await getCountryByRegion(`asia`);
      setCountries(countries);
    };
    fetch();
  }, []);

  return (
    <div className="px-4 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12">
      {countries.map((data, key) => (
        <Flag name={data.name.official} flag={data.flags.svg} />
      ))}
    </div>
  );
};

export default Flags;
