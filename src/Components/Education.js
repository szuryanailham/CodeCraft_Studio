import React from "react";
import { Line, item } from "../Assets/Utils/Index";
const Education = () => {
  return (
    <>
      <h1 id="Education" className="text-2xl font-poppins font-fontTitle font-bold text-center mt-10 md:text-3xl mb-3 py-2 text-colortitle">
        My Education
      </h1>
      <div className="w-[90%] h-[450px] bg-[#1a2848] md:h-[500px] rounded-lg relative mt-5 pt-4 mx-auto">
        <div className="w-[80%] mx-auto">
          <img className="absolute w-[75px] md:w-[140px] top-0 left-10" src={item} alt="item" />
          <div className="mt-12 md:w-[80%] mx-auto">
            <div>
              <div class="flex flex-row p-3">
                <div class="mt-[200px] md:mt-[250px]">
                  <h1 className="text-right font-bold mb-1 md:text-xl">Tazakka Boarding School</h1>
                  <p className="font-light text-right  text-[10px] md:text-[14px]">SMA Pondok Modern Tazakka (2017-2020) </p>
                </div>
                <div class="basis-1/2 md:basis-[25%] lg:basis-[15%]">
                  <img className="mx-auto mt-[80px]" src={Line} alt="Line" />
                </div>
                <div className="">
                  <h1 className="text-left mb-1 font-bold md:text-xl">Universitas Ahmad Dahlan</h1>
                  <p className="font-light  text-[10px] md:text-[14px]">S1 Sarjana Komputer ( IPK 3.46 ) </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
