import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "./InteriorDesign.css";
import LogoImage from "../assets/HandyLogo.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import Contact from "./ContactA";
import { useInView } from "react-intersection-observer";

import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import P1Image from "../assets/ID1.jpg";
import P2Image from "../assets/ID2.jpg";
import P3Image from "../assets/ID3.jpg";
import P4Image from "../assets/ID4.jpg";
import P5Image from "../assets/ID5.jpg";
import P6Image from "../assets/ID6.jpg";
import P7Image from "../assets/office.jpg";

import "animate.css";

const InteriorDesign = () => {
  const [refHm, inViewHm] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  }); 
   const [refMr, inViewMr] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [refBtn, inViewBtn] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [refCnt, inViewCnt] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div className="Interior_body">
      <div className="interior_home">
        <div className="bg-white h-16 w-full">
          <div className="w-11/12 mx-auto h-full flex justify-between">
            <div className="w-1/3 m-3 flex">
              <img
                src={LogoImage}
                alt="Business Times"
                className="w-1/5 h-2/3 logo_image"
              />
              <p className="text-black text-bold cursor_pointer">
                <RouterLink to="/">Handy Creations</RouterLink>
              </p>
            </div>
            <div className=" flex flex-row justify-end w-3/4">
              <p className="pt-4 px-3 opacity-75 text-black text-bold hover:bg-red-700 cursor-pointer">
                <RouterLink activeClass="active" to="/">
                  Home
                </RouterLink>
              </p>
              <p className="pt-4 px-3 opacity-75 text-black text-bold hover:bg-red-700 cursor-pointer">
                <RouterLink to="/design">Graphic Design</RouterLink>
              </p>
              <p className="pt-4 px-3 opacity-75 text-black text-bold hover:bg-red-700 cursor-pointer">
                <RouterLink to="/web_design">Web Design</RouterLink>
              </p>
              <p className="pt-4 px-3 opacity-75 text-black text-bold hover:bg-red-700 cursor-pointer">
                <RouterLink to="/design">Interior Design</RouterLink>
              </p>

              <p className="pt-4 px-3 opacity-75 text-black text-bold hover:bg-red-700 cursor-pointer">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-5/6 mx-auto">
          <p
            ref={ref}
            className={`animate__animated ${
              inView ? "animate__fadeInDown" : ""
            } interior-head-text `}
          >
            Transform Your{" "}
          </p>
          <p
            ref={refHm}
            className={`animate__animated ${
              inViewHm ? "animate__fadeInUp" : ""
            } interior-head-text `}
          >
            Space{" "}
          </p>
          <div className=" w-5/12 mt-36">
            <p
              ref={refHm}
              className={`animate__animated ${
                inViewHm ? "animate__fadeInUp" : ""
              } text_color l text-xl text-bold `}
            >
              Unlock the full potential of your space with our expert interior
              design services. From concept to realization, we'll bring your
              vision to life.
            </p>
            <div className="flex  mt-5">
              <p
                ref={refBtn}
                className={`animate__animated ${
                  inViewBtn ? "animate__fadeInUp" : ""
                } explore_btn p-5 text-white smaller-head-text cursor-pointer `}
              >
                Explore
                <HiOutlineArrowSmRight className="text-white inline-block mr-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="mx-auto w-11/12 h-5/6 mt-10">
          <p
            ref={refAbout}
            className={`animate__animated ${
              inViewAbout ? "animate__fadeInUp" : ""
            } pt-10 small-head-text text-white `}
          >
            Elevating spaces with expertise
          </p>
          <br />
          <br />
          <p
            ref={refAbout}
            className={`animate__animated ${
              inViewAbout ? "animate__fadeInUp" : ""
            } pt-5 small-head-text text-white`}
          >
            {" "}
            and proven success.
          </p>
          <div className="mt-16 flex justify-between h-3/5 w-full ">
            <div className="h-full experience_divs ">
              <div className="h-1/2 w-full flex justify-center items-center">
                <p
                  ref={refAbout}
                  className={`animate__animated ${
                    inViewAbout ? "animate__fadeInUp" : ""
                  } interior-head-text`}
                >
                  12K
                </p>
              </div>
              <div className=" w-full h-1/2 ">
                <p className=" text-white text-bold text-xl">Projects Done</p>
                <p
                  ref={refAbout}
                  className={`animate__animated ${
                    inViewAbout ? "animate__fadeInUp" : ""
                  } pt-2 pr-5 text-white`}
                >
                  With a rich tapestry of 12k+ completed projects, we have
                  reimagined spaces with creativity, precision, and an
                  unwavering commitment to client satisfaction.
                </p>
              </div>
            </div>
            <div className="h-full experience_divs ">
              <div className="h-1/2 w-full flex justify-center items-center">
                <p
                  ref={refAbout}
                  className={`animate__animated ${
                    inViewAbout ? "animate__fadeInUp" : ""
                  } interior-head-text`}
                >
                  10
                </p>
              </div>
              <div className=" w-full h-1/2 ">
                <p className=" text-white text-bold text-xl">
                  Years of Experience
                </p>
                <p
                  ref={refAbout}
                  className={`animate__animated ${
                    inViewAbout ? "animate__fadeInUp" : ""
                  } pt-2 pr-5 text-white`}
                >
                  Harnessing over a decade of expertise, our team brings a
                  wealth of experience and a deep understanding of interior
                  design trends to every project we undertake.
                </p>
              </div>
            </div>
            <div className="h-full experience_divs ">
              <div className="h-1/2 w-full flex justify-center items-center">
                <p
                  ref={refAbout}
                  className={`animate__animated ${
                    inViewAbout ? "animate__fadeInUp" : ""
                  } interior-head-text`}
                >
                  30
                </p>
              </div>
              <div className=" w-full h-1/2 ">
                <p className=" text-white text-bold text-xl">Staff Members</p>
                <p
                  ref={refAbout}
                  className={`animate__animated ${
                    inViewAbout ? "animate__fadeInUp" : ""
                  } pt-2 pr-5 text-white`}
                >
                  Our dedicated team of skilled professionals is equipped with
                  the expertise and knowledge to handle your interior design
                  needs with utmost care and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 interior_contact">
        <div className="flex w-11/12 h-full mx-auto">
          <div className="mt-12 h-3/5 w-1/2">
            <p className="smaller-head-text text-white ">
              Connect with Us to Bring{" "}
            </p>
            <br />
            <p
              ref={refCnt}
              className={`animate__animated ${
                inViewCnt ? "animate__fadeInUp" : ""
              } smaller-head-text text-white `}
            >
              Your Design Dreams to Life{" "}
            </p>
            <br />
            <p
              ref={refCnt}
              className={`animate__animated ${
                inViewCnt ? "animate__fadeInUp" : ""
              } pt-5 pr-16 text-white `}
            >
              Embark on a journey of design excellence where creativity meets
              functionality. Our team of passionate designers is ready to
              collaborate with you, bringing your vision to life. Whether you're
              looking to revamp your home or create a stunning commercial space,
              we're here to exceed your expectations. Reach out to us and let's
              begin creating spaces that inspire.
            </p>
            <div className="mt-6 mx-auto flex w-11/12 h-32 ">
              <div className="h-full w-1/5 flex justify-center items-center ">
                <FaPhoneAlt className="text-white text-8xl bg-blue-800 bg-opacity-25 rounded-full p-5" />
              </div>
              <div className="ml-3">
                <p className="pt-6 text-white text-bold text-3xl">
                  0703599000{" "}
                </p>
                <p className="text-white text-xl">Call Us For Inqueries</p>
              </div>
            </div>
          </div>
          <div className="office w-1/2 h-5/6 "></div>
        </div>
      </div>
      {/* slider */}
      <div className="w-11/12 mb-6 mx-auto">
        <p className="small-head-text text-white ">Explore Our Projects</p>
      </div>
      <div className="id_div w-11/12 mx-auto flex justify-left">
        <Swiper
          className="scroll_div w-auto flex overflow-x-auto mt-10 justify-between"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={2}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 900, disableOnInteraction: false }}
        >
          <SwiperSlide className="flex-shrink-0 swiper_div w-1/4 m-2">
            <div className="id_swiper_div">
              <img
                src={P1Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Office</p>
                <p className="pt-2 text-white text-bold text-lg">
                  Modern Design
                </p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex-shrink-0  swiper_div w-1/4   m-2">
            <div className="id_swiper_div">
              <img
                src={P2Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Office</p>
                <p className="pt-2 text-white text-bold text-lg">
                  Office Arrangement
                </p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex-shrink-0  swiper_div w-1/4   m-2">
            <div className="id_swiper_div">
              <img
                src={P3Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Decor</p>
                <p className="pt-2 text-white text-bold text-lg">Green Vibes</p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex-shrink-0  swiper_div w-1/4   m-2">
            <div className="id_swiper_div">
              <img
                src={P4Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Home</p>
                <p className="pt-2 text-white text-bold text-lg">BedRoom</p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* end of div */}
          <SwiperSlide className="flex-shrink-0  swiper_div w-1/4   m-2">
            <div className="id_swiper_div">
              <img
                src={P5Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Home</p>
                <p className="pt-2 text-white text-bold text-lg">Living Room</p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex-shrink-0  swiper_div w-1/4   m-2">
            <div className="id_swiper_div">
              <img
                src={P6Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Decor</p>
                <p className="pt-2 text-white text-bold text-lg">Dark Vibes</p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0  swiper_div w-1/4   m-2">
            <div className="id_swiper_div">
              <img
                src={P7Image}
                alt="Background Image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="h-1/5 w-full mx-auto flex justify-between ">
              <div className="h-full w-5/6">
                <p className="text-white opacity-75 pt-2">Office</p>
                <p className="pt-2 text-white text-bold text-lg">
                  Modern Design
                </p>
              </div>
              <div className="h-1/4 w-1/6 flex justify-end">
                <p className="pt-3 text-white">
                  <FaInfoCircle className="text_white opacity-75" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* end of test divs  */}
        </Swiper>
      </div>
      {/* end of slider */}
      {/* start of about div */}
      <div className="id_about w-11/12  mx-auto mb-16 flex justify-between">
        <div className=" id_about_info ">
          <div className=" w-4/5 h-1/5 mt-6 mx-auto flex justify-center items-center">
            <p className="text-white text-3xl text-bold">Residential Design</p>
          </div>
          <div className=" w-4/5 h-2/3 mx-auto flex justify-center ">
          <p
            ref={refMr}
            className={`animate__animated ${
              inViewMr ? "animate__fadeInUp" : ""
            } text-white text-center text-lg pt-3`}
          >
            
              Enhancing the your interior to achieve a healthier environment for
              the people using right space. We guarantee an appealing and
              spaciuos enviroment designed with perfection in mind
            </p>
          </div>
        </div>
        <div className=" id_about_info ">
          <div className=" w-4/5 h-1/5 mt-6 mx-auto flex justify-center items-center">
            <p className="text-white text-3xl text-bold">Commercial Design</p>
          </div>
          <div className=" w-4/5 h-2/3 mx-auto flex justify-center ">
          <p
            ref={refMr}
            className={`animate__animated ${
              inViewMr ? "animate__fadeInUp" : ""
            } text-white text-center text-lg pt-3`}
          >
            
              Conserve space and transform your place into a beutiful park with
              the right furniture. We redesign and rearrange your furniture to
              ensure a safe and comfortable place for you and your peers.
            </p>
          </div>
        </div>
        <div className="id_about_info ">
          <div className="w-4/5 h-1/5 mt-6 mx-auto flex justify-center items-center">
            <p className="text-white text-3xl text-bold">Hospitality Design</p>
          </div>
          <div className="w-4/5 h-2/3 mx-auto flex justify-center ">
          <p
            ref={refMr}
            className={`animate__animated ${
              inViewMr ? "animate__fadeInUp" : ""
            } text-white text-center text-lg pt-3`}
          >
       
              An appealing floor and wall decoration to enhance the beuty of
              your place. Make your enviroment comfortable and serene for you
              and your guests.
            </p>
          </div>
        </div>
      </div>

      {/* end of about div  */}
      <div id="contact" className="w-11/12 mx-auto">
        <Contact />
      </div>
    </div>
  );
};

export default InteriorDesign;
