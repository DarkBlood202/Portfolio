import React from "react";

import Headline from "./components/Headline";
import Tech from "./components/Tech";
import Project from "./components/Project";

export default function App() {
  return (
    <div className="candy-grad">
      <div className="flex flex-row-reverse w-full p-4 fixed">
        <a
          className="block pulsate-fwd"
          href="https://github.com/DarkBlood202"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <i className="ml-2 fab fa-github text-4xl"></i>
          </span>
        </a>
      </div>
      <Headline></Headline>
      <h2 className="m-16 text-3xl font-bold">Tecnologías</h2>
      <div className="mx-16 grid grid-cols-1 md:grid-cols-3 gap-y-10">
        <Tech iconClass="fab fa-python" label="Python3"></Tech>
        <Tech iconClass="fab fa-react" label="React"></Tech>
        <Tech iconClass="fab fa-angular" label="Angular"></Tech>
      </div>
      <h2 className="m-16 mb-10 mt-24 text-3xl font-bold">Proyectos</h2>
      <div className="mx-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Project
          image="https://picsum.photos/360/240"
          label="Proyecto 1"
        ></Project>
        <Project
          image="https://picsum.photos/360/240"
          label="Proyecto 2"
        ></Project>
        <Project
          image="https://picsum.photos/360/240"
          label="Proyecto 3"
        ></Project>
      </div>
    </div>
  );
}
