import React from "react";
import avatar from "../static/img/seb_avatar_alpha.png";

const Headline = () => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1 col-start-2">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="col-span-2">
          <h1 className="text-4xl">Hola.</h1>
          <h1 className="text-4xl">Mi nombre es</h1>
          <h1 className="text-4xl font-bold">Sebastian Hidalgo</h1>
          <p className="mt-8 leading-8">
            Soy un estudiante de{" "}
            <span className="font-bold">Ingeniería de Software</span> con una
            gran <span className="font-bold">pasión</span> por el desarrollo y
            la tecnología muy dispuesto a{" "}
            <span className="font-bold">aprender</span> de todo. Me gusta
            siempre llevarme bien con los demás y trabajar en{" "}
            <span className="font-bold">equipo</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
