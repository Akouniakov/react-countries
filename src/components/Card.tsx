import React from "react";

type IProps = {
  flag?: string;
  countryName?: string;
  capitale?: string;
  population?: string;
};

const Card: React.FC<IProps> = ({ countryName, flag }) => {
  return (
    <div className="text-cente flex h-full w-full  flex-col items-center rounded-lg bg-white-0  hover:blur-sm ">
      <div className="w-full p-4">
        <h2 className="">{countryName}</h2>
      </div>
      <div className="w-full">
        <img className="object-cover" src={flag} />
      </div>
    </div>
  );
};

export default Card;
