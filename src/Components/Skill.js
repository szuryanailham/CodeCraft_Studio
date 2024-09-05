import React from "react";
import { figma, Inertia, Laravel, Next, ReactSkill, tailwinds, wordpress } from "../Assets/Utils/Index";

const Skill = () => {
  return (
    <div>
      <h1 className="text-2xl font-poppins font-fontTitle font-bold text-center mt-10 md:text-3xl mb-3 py-2 text-colortitle">My Skills</h1>

      <p className="text-center px-5 mb-2 max-w-prose text-[16px] md:mx-auto">Berikut adalah beberapa keterampilan pengembang web yang saya kuasai untuk mendukung karieer saya sebagai seorang web developer.</p>
      <section class="md:w-[90%] lg:w-[75%] md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 p-4">
        {/*  ================= React ==============*/}
        <div class="bg-[#143061] w-full p-4 h-[90px] text-white rounded-xl col-span-1">
          {/* image */}
          <div>
            <img src={ReactSkill} alt="React" />
            <p className="mt-3 text-xs">React</p>
          </div>
          {/* text */}
        </div>
        {/*  ==================== TAILWINDS ============ */}
        <div class="bg-tailwind-gradient p-4 h-[90px] text-white rounded-xl">
          {/* image */}
          <div>
            <img src={tailwinds} alt="React" />
            <p className="mt-3 text-xs">Tailwinds</p>
          </div>
          {/* text */}
        </div>
        {/*  ==================== NEXT ============ */}
        <div class="bg-next-color col-span-2 md  p-5 rounded-xl text-white h-[100px]">
          <img src={Next} alt="React" />
          <p className="mt-3 text-xs">Next.js </p>
        </div>

        <div className="grid grid-flow-col gap-4 col-span-2">
          {/*  ==================== Figma ============ */}
          <div className="row-span-5 bg-figma h-[230px] text-white flex flex-col items-start rounded-xl p-5">
            <img src={figma} alt="React" />
            <p className="mt-[120px] text-right">Figma</p>
          </div>
          {/*  ==================== Wordpress ============ */}
          <div className="col-span-2 bg-bootstrap text-black flex flex-col items-center justify-center rounded-xl p-4 h-[100px]">
            <img src={wordpress} alt="React" />
            <p className="text-black">Wordpress</p>
          </div>
          {/*  ==================== Inertia ============ */}
          <div className="row-span-2 md:col-span-2 col-span-2 h-[100px] bg-inertia text-white rounded-xl p-4 items-end">
            <img className="w-10" src={Inertia} alt="React" />
            <p className=" text-right mt-2">Inertia</p>
          </div>
          {/*  ==================== Laravel  ============ */}
        </div>
        <div class="bg-laravel p-5 col-span-2 rounded-xl text-white h-[100px]">
          <img src={Laravel} alt="React" />
          <p className="mt-3 text-xs">Laravel</p>
        </div>
      </section>
    </div>
  );
};

export default Skill;
