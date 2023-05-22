import React from "react";
import "./Projects.css";
import { FaInfoCircle } from "react-icons/fa";
import BnImage from "../assets/bn.jpg";
import PstImage from "../assets/pst.jpg";
import Pst1Image from "../assets/fl.jpg";
import WbImage from "../assets/wb.png";

const Projects = () => {
  return (
    <div>
      <div>
        <h4 className="px-5 smaller-head-text">View Some Of Our Projects</h4>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="pic_div w-1/4   m-2">
          <div className="inner_pic_div">
            <img
              src={BnImage}
              alt="Background Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-white font-semibold text-sm pt-2.5 px-2">
                Webster Banner
              </p>
              <p className="text-white opacity-25 px-2 text-xs">
                {" "}
                Design . Banner . Printing
              </p>
            </div>
            <div >
              <p className="pt-5 px-3 cursor-pointer"><FaInfoCircle style={{ color: "white" }} /></p>
            </div>
          </div>
        </div>

        <div className="pic_div w-1/4   m-2">
          <div className="inner_pic_div">
            <img
              src={PstImage}
              alt="Background Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-white font-semibold text-sm pt-2.5 px-2">
                Chaka Place Poster
              </p>
              <p className="text-white opacity-25 px-2 text-xs">
                {" "}
                Design . Poster . Printing
              </p>
            </div>
            <div >
              <p className="pt-5 px-3 cursor-pointer"><FaInfoCircle style={{ color: "white" }} /></p>
            </div>
          </div>
        </div>

        <div className="pic_div w-1/4   m-2">
          <div className="inner_pic_div">
            <img
              src={Pst1Image}
              alt="Background Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-white font-semibold text-sm pt-2.5 px-2">
                Crstal Branding
              </p>
              <p className="text-white opacity-25 px-2 text-xs">
                {" "}
                Design . Branding . Logo
              </p>
            </div>
            <div >
              <p className="pt-5 px-3 cursor-pointer"><FaInfoCircle style={{ color: "white" }} /></p>
            </div>
          </div>
        </div>

        <div className="pic_div w-1/4   m-2">
          <div className="inner_pic_div">
            <img
              src={WbImage}
              alt="Background Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-white font-semibold text-sm pt-2.5 px-2">
                Mkulima Website
              </p>
              <p className="text-white opacity-25 px-2 text-xs">
                {" "}
                Design . Web . Hosting
              </p>
            </div>
            <div >
              <p className="pt-5 px-3 cursor-pointer"><FaInfoCircle style={{ color: "white" }} /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
