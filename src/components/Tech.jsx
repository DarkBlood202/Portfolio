import React from "react";

function Tech(props) {
  return (
    <div className="text-center">
      <i className={`font-bold text-6xl ${props.iconClass}`}></i>
      <p className="font-bold text-2xl mt-4">{props.label}</p>
    </div>
  );
}

export default Tech;
