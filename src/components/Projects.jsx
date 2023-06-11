import React, { useState, useEffect } from "react";

import "./Projects.css";
import { FaInfoCircle } from "react-icons/fa";
// import BnImage from "../assets/bn.jpg";
// import PstImage from "../assets/pst.jpg";
// import Pst1Image from "../assets/fl.jpg";
// import WbImage from "../assets/wb.png";

import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/backend/api/homes/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="project">
      <div className="h-full holder">
        <div className=" flex justify-left">
          <p className="text-4xl text_grey font-bold ">View Our Projects</p>
        </div>
        <Swiper
          className="scroll_div w-auto flex overflow-x-auto mt-10 justify-between"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={2}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 900, disableOnInteraction: false }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="flex-shrink-0  pic_div w-1/4   m-2"
            >
              <div className="inner_pic_div">
                <img
                  src={project.pic}
                  alt={project.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-black opacity-75 font-semibold text-sm pt-2.5 px-2">
                    {project.name}
                  </p>
                  <p className="text-black opacity-25 px-2 text-xs">
                  {project.tag.map((tags) => (
                    <span className="pr-5" key={tags.id}> {tags.name}</span>
                  ))}
                  </p>
                </div>
                <div>
                  <p className="pt-5 px-3 cursor-pointer">
                    <FaInfoCircle className="text_grey" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* end of div */}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
