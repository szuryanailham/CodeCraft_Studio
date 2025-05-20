import React from "react";
import { profile, Substract } from "../Assets/Utils/Index";
import { Deskripsi, LinkSocialMediaArray, title } from "../constants";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";
const Profile = () => {
  return (
    <div className=" h-[95vh] md:h-fit static md:fixed -left-10 top-4 w-full md:w-auto mb-2">
      {/* Background image */}
      <img className="w-fit md:px-10 mt-7 px-20" src={Substract} alt="Substract" />

      {/* Text on top of the image */}
      <div className="absolute inset-0 flex flex-col mt-10 md:mt-5 items-center space-y-3 md:space-y-1 ">
        {/* image profile */}
        <img className="w-[270px] h-fit mx-auto px-7 md:px-10" src={profile} alt="Profile" />
        {/* Title */}
        <div className="py-3">
          <h1 className="font-fontTitle text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-1">{title}</h1>

          <p className="text-xs text-center text-slate-400">Web Dev | UI Design | Digital Innovation</p>
        </div>
        {/* Bio */}
        <div className="w-fit flex flex-col space-y-5 item-center justify-center mx-auto">
          {/* tanggal lahir */}
          {/* address */}
          <div className="flex items-center gap-3">
            <FaMapPin className="text-xl" />
            <p className="text-sm">Yogyakarta, Indonesia</p>
          </div>
          {/* email */}
          <div className="flex items-center gap-3">
            <MdOutlineMailOutline className="text-xl" />
            <a className="text-xs underline hover:text-blue-600" href="mailto: name@email.com">
              Studiocodecraft9@gmail.com
            </a>
            <p></p>
          </div>
        </div>
        {/* Deskripsi */}
        <div className=" mx-auto max-w-prose text-center font-fontTitle px-2 md:px-12 py-3 mb-10">
          <p className="text-center px-5 max-w-prose text-[14px] md:mx-auto">{Deskripsi}</p>
        </div>
        {/* link Sosmed */}
        <div className="flex space-x-3">
          {LinkSocialMediaArray.map((item, id) => (
            <a href={item.url} id="id" className="w-9 h-9 p-2 bg-gray-700 rounded-md">
              <img src={item.image} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
