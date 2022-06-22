import React from "react";

interface IProps {
  name: string;
  capital?: string;
  flag?: string;
}

const Flag: React.FC<IProps> = ({ name, capital, flag }) => {
  return (
    <div className="group relative h-max w-full rounded-lg border-4 ">
      <h5 className="z-10 hidden">{name}</h5>
      <img className="z-0 object-cover group-hover:blur-lg" src={flag} />
    </div>
  );
};

export default Flag;
