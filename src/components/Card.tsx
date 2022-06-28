import React from "react";

type IProps = {
  flag?: string;
  countryName?: string;
  capitale?: string;
  population?: string;
};

const Card: React.FC<IProps> = ({ countryName, flag }) => {
  return (
    <div className="text-center flex h-full w-full flex-col justify-center items-center rounded-lg bg-white-0 group p-4 duration-200">
      <div className="w-full pb-4">
        <h2 className="">{countryName}</h2>
      </div>
      <div className="bg-cover h-20">
        <img className="object-contain h-full " src={flag} />
      </div>
    </div>
  );
};

export default Card;
