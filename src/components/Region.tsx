import React, { useEffect, useState } from "react";
import { getCountries } from "../services/ServiceCountry";
import Flags from "./Flags";

type RegionProps = {
  name: string;
  regionUrl: string;
};

const Region: React.FC<RegionProps> = ({ name, regionUrl }) => {
  return (
    <div className="flex flex-col">
      <h1 className="py-3 text-center text-4xl font-bold">{name}</h1>
      <Flags region={regionUrl} />
    </div>
  );
};

export default Region;
