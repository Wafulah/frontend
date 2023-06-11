import React, { useState, useEffect, useRef } from "react";

import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Contact from "./ContactA";
import LogoImage from "../assets/HandyLogo.png";
import "./Design.css";
import { useInView } from "react-intersection-observer";
// import CreativeImage from '../assets/creative.png';
import {
  BsFillPaletteFill,
  BsPencilSquare,
  BsFillPrinterFill,
  BsFillBagHeartFill,
} from "react-icons/bs";

import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import P1Image from "../assets/p1.png";
import P2Image from "../assets/p2.png";
import P3Image from "../assets/p3.png";
import P4Image from "../assets/p4.png";
import P5Image from "../assets/p5.png";
import P6Image from "../assets/p6.jpg";
import P7Image from "../assets/p7.jpg";
import { motion, AnimatePresence } from "framer-motion";

import "animate.css";

const Overlay = ({ visible, onClose }) => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/backend/api/designs/");
        const data = await response.json();
        setDesigns(data);
      } catch (error) {
        console.error("Error fetching designs:", error);
      }
    };

    fetchData();
  }, []);
  const handleCloseClick = () => {
    onClose();
  };

  const overlayVariants = {
    hidden: {
      y: "100%", // Starting position (hidden below the screen)
    },
    visible: {
      y: 0, // Visible position (slid up to the top)
    },
  };

  const innerDownDivVariants = {
    hidden: {
      y: "100%", // Starting position (hidden below the screen)
    },
    visible: {
      y: 0, // Visible position (slid up to the top)
      transition: {
        duration: 1.0,
      },
    },
  };
  const innerTopDivVariants = {
    hidden: {
      y: "-100%", // Starting position (hidden below the screen)
    },
    visible: {
      y: 0, // Visible position (slid up to the top)
      transition: {
        duration: 1.0,
      },
    },
  };

  const innerRightDivVariants = {
    hidden: {
      x: "100%", // Starting position (hidden below the screen)
    },
    visible: {
      x: 0, // Visible position (slid up to the top)
      transition: {
        duration: 1.5,
      },
    },
  };
  const innerProjDivVariants = {
    hidden: {
      x: "80%", // Starting position (hidden below the screen)
    },
    visible: {
      x: 0, // Visible position (slid up to the top)
      transition: {
        duration: 0.9,
      },
    },
  };

  const innerLeftDivVariants = {
    hidden: {
      x: "-100%", // Starting position (hidden below the screen)
    },
    visible: {
      x: 0, // Visible position (slid up to the top)
      transition: {
        duration: 1.5,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger the animation once when it comes into view
  });
  const [refServices, inViewServices] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger the animation once when it comes into view
  });
  const [refProjects, inViewProjects] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger the animation once when it comes into view
  });

  return (
    <motion.div
      className="overlay"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={overlayVariants}
      transition={{ duration: 1.5 }}
    >
      <div className="design_nav_div w-full mx-auto justify-between flex">
        <div className="w-1/3 m-3 flex">
          <img
            src={LogoImage}
            alt="Business Times"
            className="w-1/5 h-2/3 logo_image"
          />
          <p className="text-white text-bold cursor_pointer">
            <RouterLink to="/">Handy Creations</RouterLink>
          </p>
        </div>
        <div className="w-2/3 m-3 justify-end flex">
          <button className=" close-button" onClick={handleCloseClick}>
            <FaTimes className="text-4xl text-white hover:bg-red-700 rounded-xl" />
          </button>
        </div>
      </div>
      <div id="services" className="full_screen flex" ref={refServices}>
        <div className="h-full w-1/2 flex justify-end ">
          <motion.div
            className="h-3/4 w-3/4 m-5  business_card"
            variants={innerTopDivVariants}
            initial="hidden"
            animate={inViewServices ? "visible" : "hidden"}
          >
            {" "}
          </motion.div>
        </div>
        <div id="our_services" className="h-full w-1/2 flex justify-start mt-6">
          <div className="h-3/4 w-3/4 m-5 ">
            <motion.div
              className="h-full w-full "
              variants={innerRightDivVariants}
              initial="hidden"
              animate={inViewServices ? "visible" : "hidden"}
            >
              <h2 className="text-white smaller-head-text">
                <span className="text_underline">Learn</span> Our Services
              </h2>
              <div className="h-full w-full">
                <div className="flex mt-5 w-full h-1/6 ">
                  <div className="w-1/6 h-full   flex justify-center items-center">
                    <BsFillPaletteFill className="text-6xl text-white" />
                  </div>
                  <div className="w-11/12 h-full ml-5 ">
                    <p className="text-white text-bold ">
                      Branding and Identity
                    </p>
                    <p className="text-white text-xs opacity-75">
                      We sssist businesses in developing a cohesive brand
                      strategy, including brand guidelines, color schemes,
                      typography, and visual elements, to ensure consistency
                      across all marketing materials.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 w-full h-1/6 ">
                  <div className="w-1/6 h-full   flex justify-center items-center">
                    <BsPencilSquare className="text-6xl text-white" />
                  </div>
                  <div className="w-11/12 h-full ml-5">
                    <p className="text-white text-bold ">Logo Design</p>
                    <p className="text-white text-xs opacity-75">
                      {" "}
                      We offer professional logo design services to help
                      businesses establish a unique and recognizable brand
                      identity.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 w-full h-1/6 ">
                  <div className="w-1/6 h-full   flex justify-center items-center">
                    <BsFillPrinterFill className="text-6xl text-white" />
                  </div>
                  <div className="w-11/12 h-full ml-5">
                    <p className="text-white text-bold ">Print Design</p>
                    <p className="text-white text-xs opacity-75">
                      We provide creative and eye-catching print design
                      solutions, such as brochures, flyers, business cards, and
                      posters, to effectively communicate our clients' messages.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 w-full h-1/6 ">
                  <div className="w-1/6 h-full   flex justify-center items-center">
                    <BsFillBagHeartFill className="text-6xl text-white" />
                  </div>
                  <div className="w-11/12 h-full ml-5">
                    <p className="text-white text-bold ">Packaging Design</p>
                    <p className="text-white text-xs opacity-75">
                      Create visually appealing and functional packaging designs
                      that captivate customers and enhance the product's appeal
                      on shelves.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className=" w-3/4 mb-5 mx-auto design_more_info"
        ref={ref}
      >
        <motion.div
          className="w-full branded_items "
          variants={innerDownDivVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        ></motion.div>
        <div className=" flex mt-3 mx-auto h-1/2 w-11/12 " ref={ref}>
          <motion.div
            className="w-1/2 h-full "
            variants={innerLeftDivVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="pt-6 p-5 text-white smaller-head-text">
              <span className="text_underline">Our </span> Goal
            </h2>

            <p className="p-5 pr-10 text-white text-sm opacity-75">
              Our Goal is to provide you with a comprehensive range of creative
              graphic design services tailored to meet your specific needs. From
              eye-catching banners and captivating stickers to stunning canvas
              prints, impactful posters, enticing menus, professional business
              cards, and custom-designed shirts, we are committed to delivering
              exceptional visual solutions that enhance your brand image and
              drive your business forward. Trust us to bring your ideas to life
              and make a lasting impression on your target audience.
            </p>
          </motion.div>
          <motion.div
            className="w-1/2 h-full "
            variants={innerRightDivVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="p-5 pt-6 text-white smaller-head-text">
              <span className="text_underline">Benefits</span>
            </h2>
            <p className="pl-5 text-white smaller-head-text">
              <span className="text-white text-sm">Experience</span>
            </p>
            <p className="pl-5 pr-5 text-white text-sm opacity-75">
              We have been in the industry for over a decade, mastering the art
              of Graphic design and Branding. Our vast experience enables us to
              deliver exceptional results, tailored to meet the unique needs of
              our clients. With a passion for what we do, we take pride in
              serving satisfied customers and creating impactful online
              experiences.
            </p>
            <p className="pl-5 pt-3 text-white smaller-head-text">
              <span className="text-white text-sm">OutCome</span>
            </p>
            <p className="pl-5 pr-5 text-white text-sm opacity-75">
              Our branding expertise guarantees captivating and memorable brand
              identities that leave a lasting impression on your target
              audience, driving brand recognition, customer loyalty, and
              business growth.
            </p>
          </motion.div>
        </div>
      </div>
      <div id="gallery" className="mx-auto design_gallery" ref={refProjects}>
        <div className="h-1/6 w-full flex justify-center items-center">
          <h2 className="p-5 pt-6 text-white smaller-head-text">
            <span className="text_underline">Our</span> Services
          </h2>
        </div>
        <motion.div
          className="flex justify-left"
          variants={innerProjDivVariants}
          initial="hidden"
          animate={inViewProjects ? "visible" : "hidden"}
        >
          <Swiper
            className="scroll_div w-auto flex overflow-x-auto mt-10 justify-between"
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={2}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 900, disableOnInteraction: false }}
          >
          {designs.map((design) => (
            <SwiperSlide key={design.id} className="flex-shrink-0 pic_div w-1/4 m-2">
              <div className="inner_pic_div">
                <img
                  src={design.pic}
                  alt="Background Image"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}


            {/* end of test divs  */}
          </Swiper>
        </motion.div>
      </div>
      <div className="w-11/12  h-20 "></div>
      <div id="contact" className="mx-auto mt-16 w-3/4">
        <Contact />
      </div>
    </motion.div>
  );
};

const Design = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const overlayRef = useRef(null);

  const handleButtonClick = () => {
    setIsOverlayVisible(true);
    overlayRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };
  const innerLeftDivVariants = {
    hidden: {
      x: "-100%", // Starting position (hidden below the screen)
    },
    visible: {
      x: 0, // Visible position (slid up to the top)
      transition: {
        duration: 1.5,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation once when it comes into view
  });
  return (
    <div className="design_home">
      {isOverlayVisible && (
        <div className="overlay-container" ref={overlayRef}>
          <Overlay visible={isOverlayVisible} onClose={closeOverlay} />
        </div>
      )}
      <div className="design_glassmorphism">
        <div className="w-11/12 h-full mx-auto">
          <nav className="bg-white flex design_nav  w-full ">
            <div className="mt-4 name flex justify-start  h-6 w-1/3">
              <img
                src={LogoImage}
                alt="Business Times"
                className="logo_image"
              />
              <h3 className="text-black text-left px-0.5 py-0.5 text-bold opacity-75">
                <RouterLink activeClass="active" to="home">
                  Handy Creations
                </RouterLink>
              </h3>
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
                <RouterLink to="/interior_design">Interior Design</RouterLink>
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
          </nav>
          <div className="design_body justify-between flex" ref={ref}>
            <motion.div
              className="creative_div w-1/2 h-5/6  flex justify-center items-center"
              variants={innerLeftDivVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="h-full w-3/4 inner_creative_div"></div>
            </motion.div>
            <div className="  design_pic w-1/2 h-3/4 ">
              <h3 className="animate__animated animate__rotateIn  flip-text transition duration-300 head-text ">
                Graphics
              </h3>
              <br />
              <br />

              <h3 className="animate__animated animate__heartBeat flip-text text-2xl text-white small-head-text">
                Perfection
              </h3>
              <p className="animate__animated animate__rollIn golden_text  pt-10 p-1 ">
                Proffesional Graphic Designers
              </p>
              <p className="animate__animated animate__bounceInUp golden_text text-sm pt-5 pr-16 p-1">
                Indulge in the artistry of our professional graphic designers.
                We craft captivating designs that evoke emotions and leave a
                lasting impression. Discover a world where creativity knows no
                limits. Step into our gallery and be inspired.
              </p>
              <div className="flex  mt-5">
                <p
                  onClick={handleButtonClick}
                  className="explore_button p-5 text-white smaller-head-text cursor-pointer "
                >
                  Explore
                  <HiOutlineArrowSmRight className="text-white inline-block mr-1" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
