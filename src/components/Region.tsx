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
      <h5 className="text-3xl font-bold text-center py-3">{name}</h5>
      <Flags region={regionUrl} />
    </div>
  );
};

export default Region;
