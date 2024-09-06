import React from "react";
import { TbHome } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { MdWeb } from "react-icons/md";
import { Link } from "react-scroll";
const MenuBar = () => {
  return (
    <>
      <div className="w-fit md:w-[50px] h-fit bg-[#0d1422] fixed z-[100] flex md:flex-col gap-7 md:gap-5 bottom-5 left-[50%] transform translate-x-[-50%] md:left-auto md:right-0 md:top-[50%] md:translate-y-[-50%] rounded-md px-8 md:px-4 py-4">
        {/* Link to Home */}
        <Link smooth={true} duration={500} to="home" className="cursor-pointer">
          <TbHome className="w-5 h-5" />
        </Link>

        {/* Link to Education */}
        <Link smooth={true} duration={500} to="education" className="cursor-pointer">
          <LuGraduationCap className="w-5 h-5" />
        </Link>

        {/* Link to Experience */}
        <Link smooth={true} duration={500} to="experience" className="cursor-pointer">
          <MdOutlineWorkOutline className="w-5 h-5" />
        </Link>

        {/* Link to Portfolio */}
        <Link smooth={true} duration={500} to="portofolio" className="cursor-pointer">
          <MdWeb className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
};

export default MenuBar;
