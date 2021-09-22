import React from "react";

function Project(props) {
  return (
    <div className="sonic-white rounded-xl shadow-xl text-center shadow-drop-2-center">
      <img
        className="rounded-t-xl w-full"
        src={props.image}
        alt={props.label}
      />
      <p className="text-lg py-4">{props.label}</p>
    </div>
  );
}

export default Project;
