import React from "react";

interface IProps {
  name: string;
  capital?: string;
  flag?: string;
}

const Flag: React.FC<IProps> = ({ name, capital, flag }) => {
  return (
    <div className="rounded-lg border h-max w-full group">
      <h5 className="hidden">{name}</h5>
      <img className="object-cover group-hover:blur-lg" src={flag} />
    </div>
  );
};

export default Flag;
