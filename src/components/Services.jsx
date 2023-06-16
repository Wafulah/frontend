import React, { useState } from "react";
import { FaKeycdn, FaTimes } from "react-icons/fa";
import "./Services.css";




const Services = () => {

    const handleLearnMoreClick = () => {
    console.log("handy"); // Disable scrolling
  };

  return (
    <div  className="svc-holder">
     
      <div className="sm:w-11/12  text-center w-2/3 mx-auto">
        <h4 className="smaller-head-text">Our Services</h4>
        <p className="sm:text-md text-center-services 2xl:text-2xl text-white opacity-50 mt-10">
          We know how! Our business solutions strategies will build your brand
          and customer base to set you up for long-term success
        </p>
      </div>
   
      <div className="sm:block sm:mt-6 flex mx-auto justify-between mt-10 services_div">
        <div className="sm:w-11/12 sm:h-64 sm:mx-auto 2xl:h-96  glassmorphism w-1/3 h-80 border-10 m-2 flex flex-col justify-between">
          <h3 className="2xl:pb-4 2xl:text-2xl text-white px-5 py-7 font-bold">
            Graphic Design
          </h3>
          <p className=" 2xl:text-2xl  text-white opacity-75 px-5">
            Unleash the power of creativity with our exceptional graphic design
            services.
          </p>
          <div className=" 2xl:mt-10 2xl:h-16 flex mx-auto mb-5">
            <div className="flex-grow"></div>
            <div>
              <FaKeycdn className="2xl:text-6xl text-white text-4xl" />
            </div>
            <div>
              <h3
                className="2xl:text-2xl cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
            </div>
          </div>
        </div>
        <div className="sm:w-11/12 sm:h-64 sm:mx-auto 2xl:h-96 glassmorphism w-1/3 h-80 border-10 m-2 flex flex-col justify-between">
          <div>
            <h3 className="2xl:pb-4 2xl:text-2xl text-white px-5 py-7 font-bold">
              Branding
            </h3>
            <p className="2xl:text-2xl text-white opacity-75 px-5">
              Elevate your brand identity with our comprehensive branding
              solutions.
            </p>
          </div>
          <div className=" 2xl:mt-10 2xl:h-16 flex mx-auto mb-5">
            <div className="flex-grow"></div>
            <div>
              <FaKeycdn className="2xl:text-6xl text-white text-4xl" />
            </div>
            <div>
              <h3
                className="2xl:text-2xl cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
            </div>
          </div>
        </div>

        <div className="sm:w-11/12 sm:h-64 sm:mx-auto 2xl:h-96 glassmorphism w-1/3 h-80 border-10 m-2 flex flex-col justify-between">
          <h3 className="2xl:pb-4 2xl:text-2xl text-white px-5 py-7 font-bold">
            Web Design
          </h3>
          <p className="2xl:text-2xl text-white opacity-75 px-5">
            Experience the artistry of seamless user experiences with our
            cutting-edge web design services.
          </p>
          <div className=" 2xl:mt-10 2xl:h-16 flex mx-auto mb-5">
            <div className="flex-grow"></div>
            <div>
              <FaKeycdn className="2xl:text-6xl text-white text-4xl" />
            </div>
            <div>
              <h3
                className="2xl:text-2xl cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
            </div>
          </div>
        </div>
        <div className="sm:w-11/12 sm:h-64 sm:mx-auto 2xl:h-96 glassmorphism w-1/3 h-80 border-10 m-2 flex flex-col justify-between">
          <h3 className="2xl:pb-4 2xl:text-2xl text-white px-5 py-7 font-bold">
            Printing
          </h3>
          <p className="2xl:text-2xl text-white opacity-75 px-5">
            Elevate your brand with our exceptional printing services, turning
            designs into art with precision and quality.
          </p>
          <div className=" 2xl:mt-10 2xl:h-16 flex mx-auto mb-5">
            <div className="flex-grow"></div>
            <div>
              <FaKeycdn className="2xl:text-6xl text-white text-4xl" />
            </div>
            <div>
              <h3
                className="2xl:text-2xl cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
