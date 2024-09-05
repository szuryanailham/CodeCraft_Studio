import "./App.css";
import Ability from "./Components/Ability";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Portofolio from "./Components/Portofolio";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import { TbHome } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { MdWeb } from "react-icons/md";
import { Link } from "react-scroll";
function App() {
  return (
    <>
      <div className=" w-fit md:w-[50px] h-fit bg-[#0d1422] fixed z-[100] flex md:flex-col gap-7 md:gap-5 bottom-5 right-[20%] md:right-0 md:top-[50%] rounded-md px-8 md:px-4 py-4">
        <Link smooth={true} duration={500} to="Home" className="cursor-pointer">
          <TbHome className="w-5 h-5" />
        </Link>

        <div smooth={true} duration={500} to="Education" className="cursor-pointer">
          <LuGraduationCap className="w-5 h-5" />
        </div>
        <div smooth={true} duration={500} to="Experience" className="cursor-pointer">
          <MdOutlineWorkOutline className="w-5 h-5" />
        </div>
        <div smooth={true} duration={500} to="Portofolio" className="cursor-pointer">
          <MdWeb className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-fit md:h-screen">
        {/* Profile */}
        <div id="profile" className="w-full md:w-1/3 md:border-r-4 border-gray-700">
          <Profile />
        </div>
        {/* Description */}
        <div id="content" className="w-full md:w-2/3 overflow-y-auto md:overflow-y-scroll h-full md:h-screen p-4">
          <Hero />
          <Skill />
          <Education />
          <Experience />
          <Portofolio />
          <Ability />
        </div>
      </div>
    </>
  );
}

export default App;
