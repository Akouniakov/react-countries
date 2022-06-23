import React from "react";

interface IProps {
  name: string;
  capitale: string;
  flag: string;
  population: string;
}

const Flag: React.FC<IProps> = ({ name, capitale, flag, population }) => {
  return (
    <div className="group relative h-max w-full rounded-lg border-4">
      <div className="absolute z-10 grid grid-cols-2 justify-items-center gap-4 opacity-0 transition group-hover:opacity-100">
        <h3 className="">Nom :</h3>
        <h3 className="">{name}</h3>
        <h3 className="">Capitale : </h3>
        <h3 className="">{capitale}</h3>
        <h3 className="">Population :</h3>
        <h3 className="">{population}</h3>
      </div>
      <img
        className="z-0 object-cover transition group-hover:blur-lg"
        src={flag}
      />
    </div>
  );
};

export default Flag;
