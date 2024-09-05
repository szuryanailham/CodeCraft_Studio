import React from "react";
import { experience } from "../constants";
const Experience = () => {
  return (
    <>
      <h1 id="Experience" className="text-2xl font-poppins font-fontTitle font-bold text-center mt-10 md:text-3xl mb-3 py-2 text-colortitle">
        My Experience
      </h1>
      {experience.map((item, index) => (
        <div key={index} className="max-w-2xl mx-auto  shadow-md rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-3">
            <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">{item.Title}</h2>
            <h3 className="text-md md:text-md">{item.year}</h3>
          </div>
          <p className="text-white text-center md:text-left leading-relaxed mt-3">{item.deskripsi}</p>
        </div>
      ))}
    </>
  );
};

export default Experience;
