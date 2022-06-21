import React from "react";

interface IProps {
  name: string;
}

const Flag: React.FC<IProps> = (props) => {
  return (
    <div className="p-6 rounded-lg border">
      <h5 className="">{props.name}</h5>
    </div>
  );
};

export default Flag;
