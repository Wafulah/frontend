import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./WebDesign.css";
import "animate.css";

import LogoImage from "../assets/HandyLogo.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaRegHandshake,
  FaUserClock,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { TiSocialInstagram } from "react-icons/ti";
import { MdAppShortcut } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import Contact from "./Contact";

const WebDesign = () => {
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
  const innerTopADivVariants = {
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
  const innerTopBDivVariants = {
    hidden: {
      y: "-100%", // Starting position (hidden below the screen)
    },
    visible: {
      y: 0, // Visible position (slid up to the top)
      transition: {
        duration: 2.0,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation once when it comes into view
  });

  const [refText, inViewText] = useInView({
    triggerOnce: false, // Trigger the animation every time the element comes into view
    threshold: 0.2, // Adjust the threshold value as needed
  });
  const [refSrvText, inViewSrvText] = useInView({
    triggerOnce: false, // Trigger the animation every time the element comes into view
    threshold: 0.1, // Adjust the threshold value as needed
  });

  return (
    <div className="bg-black">
      <div className=" flex justify-center items-center web_head">
        <div className="web_design_glassmorphism   mx-auto ">
          <div className="h-full w-11/12 mx-auto">
            <div className="h-16 w-full flex">
              <div className="mt-4 name flex justify-start  h-6 w-1/3">
                <img
                  src={LogoImage}
                  alt="Business Times"
                  className="logo_image"
                />
                <h3 className="text-white text-left px-0.5 py-0.5 text-bold opacity-75">
                  <RouterLink activeClass="active" to="home">
                    Handy Creations
                  </RouterLink>
                </h3>
              </div>

              <div className=" flex flex-row justify-end w-3/4">
                <p className="pt-4 px-3 opacity-75 text-white text-bold hover:bg-red-700 cursor-pointer">
                  <RouterLink activeClass="active" to="/">
                    Home
                  </RouterLink>
                </p>
                <p className="pt-4 px-3 opacity-75 text-white text-bold hover:bg-red-700 cursor-pointer">
                  <RouterLink to="/design">Graphic Design</RouterLink>
                </p>
                <p className="pt-4 px-3 opacity-75 text-white text-bold hover:bg-red-700 cursor-pointer">
                  <RouterLink to="/design">Web Design</RouterLink>
                </p>
                <p className="cursor-pointer hover:bg-red-700 font-semibold opacity-75 text-white px-6 py-2.5">
                  <RouterLink to="/interior_design">Interior Design</RouterLink>
                </p>

                <p className="pt-4 px-3 opacity-75 text-white text-bold hover:bg-red-700 cursor-pointer">
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
            <div className="w-full h-5/6 flex">
              <div className="w-1/2 h-full ">
                <p
                  ref={refText}
                  className={`animate__animated ${
                    inViewText ? "animate__bounceIn" : ""
                  } p-4 pt-10 text-white small-head-text`}
                >
                  Handy{" "}
                </p>
                <br />
                <p
                  ref={refText}
                  className={`animate__animated ${
                    inViewText ? "animate__fadeInRight" : ""
                  } p-4 text-white small-head-text`}
                >
                  {" "}
                  Creations{" "}
                </p>
                <br />
                <p
                  ref={refText}
                  className={`animate__animated ${
                    inViewText ? "animate__bounceIn" : ""
                  } p-4 text-white small-head-text`}
                >
                  Web Solutions
                </p>
                <p
                  ref={ref}
                  className={`animate__animated ${
                    inViewText ? "animate__slideInUp" : ""
                  } p-4 pt-6 text-white text-sm`}
                >
                  Unlock the potential of your online presence with our
                  cutting-edge web solutions. From captivating designs to
                  seamless functionality, we empower your business to thrive in
                  the digital landscape.
                </p>
                <div className="flex m-4  mt-5">
                  <p
                    //   onClick={handleButtonClick}
                    className="web_explore_btn p-4 p-5 text-white smaller-head-text cursor-pointer "
                  >
                    Explore
                    <HiOutlineArrowSmRight className="text-white inline-block mr-1" />
                  </p>
                </div>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center ">
                <div className="comp w-11/12 h-3/4 ">
                  {/* <img src={CompImage} alt="Web Development" className="bg-cover w-full h-full" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="web_body">
        <div className="web_services w-full ">
          <div className="h-1/5 w-full ">
            <div className="w-full h-1/3 ">
              <h2 className="p-5  pt-6 text-white smaller-head-text">
                <span className="text_underline">Services </span> We Offer
              </h2>
            </div>
            <div className="h-2/3 w-full ">
              <div className="w-1/2 h-full">
              <p
        ref={refSrvText}
        className={`animate__animated ${
          inViewSrvText ? "animate__fadeInLeft" : ""
        }  text-white text-white pt-2 p-5`}
      >

                
                  {" "}
                  Our comprehensive suite of services ensures your online
                  presence is a true reflection of your brand's uniqueness and
                  vision. Learn More About The Services We Offer at our Company{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="h-3/4 w-full " ref={ref}>
            <motion.div
              className="w-full h-1/2 flex justify-between"
              variants={innerTopADivVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="web_info_div flex justify-center items-center">
                <div className="mx-auto h-5/6 w-5/6 ">
                  <FaLaptopCode className="text-6xl text-white" />
                  <p className="text-white text-3xl pt-3 text-bold ">
                    Web Design
                  </p>
                  <p className="text-white pt-3 text-sm">
                    Elevate your online presence with our expert web design
                    services, tailored to captivate your audience and drive
                    meaningful engagement. Let our creative designs breathe life
                    into your brand and set you apart in the digital landscape.
                  </p>
                </div>
              </div>
              <div className="web_info_div  flex justify-center items-center">
                <div className="mx-auto h-5/6 w-5/6 ">
                  <TbWorldWww className="text-6xl text-white" />
                  <p className="text-white text-2xl pt-3 text-bold ">
                    Domain Registration
                  </p>
                  <p className="text-white pt-3 text-sm">
                    Secure your online presence with our seamless domain
                    registration services. Claim your unique domain name today
                    and establish your digital identity with confidence.
                  </p>
                </div>
              </div>
              <div className="web_info_div  flex justify-center items-center">
                <div className="mx-auto h-5/6 w-5/6 ">
                  <FaServer className="text-6xl text-white" />
                  <p className="text-white text-3xl pt-3 text-bold ">
                    Web Hosting
                  </p>
                  <p className="text-white pt-3 text-sm">
                    Experience reliable and high-performance web hosting
                    solutions tailored to your needs. Elevate your website's
                    performance and ensure optimal uptime with our top-notch
                    hosting services
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full h-1/2 flex justify-between"
              variants={innerTopBDivVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="web_info_div  flex justify-center items-center">
                <div className="mx-auto h-5/6 w-5/6 ">
                  <TiSocialInstagram className="text-6xl text-white" />
                  <p className="text-white text-3xl pt-3 text-bold ">
                    Social Media
                  </p>
                  <p className="text-white pt-3 text-sm">
                    Unlock the power of social media to propel your business
                    forward. Our expert social media strategies will elevate
                    your brand, engage your audience, and drive conversions,
                    ensuring your business reaches new heights of success in the
                    digital landscape.
                  </p>
                </div>
              </div>
              <div className="web_info_div  flex justify-center items-center">
                <div className="mx-auto h-5/6 w-5/6 ">
                  <MdAppShortcut className="text-6xl text-white" />
                  <p className="text-white text-3xl pt-3 text-bold ">
                    Web Development
                  </p>
                  <p className="text-white pt-3 text-sm">
                    Experience the limitless possibilities of web development
                    with our skilled team. From custom web applications to
                    seamless e-commerce solutions, we transform your vision into
                    a powerful online presence that captivates your audience and
                    drives business growth
                  </p>
                </div>
              </div>
              <div className="web_info_div  flex justify-center items-center">
                <div className="mx-auto h-5/6 w-5/6 ">
                  <GiPodiumWinner className="text-6xl text-white" />
                  <p className="text-white text-3xl pt-3 text-bold ">
                    Digital Strategies
                  </p>
                  <p className="text-white pt-3 text-sm">
                    Supercharge your online presence with our winning digital
                    strategies. From optimization to innovation, we'll propel
                    your business to new heights in the digital realm. Drive
                    success, outpace competitors, and achieve remarkable results
                    with our tailored strategies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-20 w-full"></div>
        <div className="web_about mb-5 w-full flex">
          <div className="w-3/5 h-full abt_comp"></div>
          <div className="w-2/5 h-4/5">
            <h2 className=" pt-6 text-white smaller-head-text">
              Why You should Work With
            </h2>
            <br />
            <h2 className=" pt-3 text-white smaller-head-text">
              <span className="text_underline"> Us </span>
            </h2>
            <p
             
              className="pt-5 text-white text-sm opacity-75"
            >
              Choose us for your web design and development needs. We are
              dedicated to delivering exceptional results, bringing creativity
              and expertise to every project. Let us be your trusted partner for
              success.
            </p>
            <div className="h-3/4 w-full">
              <div className="mt-2 h-1/3 w-full flex justify-between ">
                <div className="h-full w-1/5 ">
                  <p className="text-purple-500 text-6xl text-bold">01.</p>
                </div>
                <div className="w-3/4 h-full">
                  <p className="text-white text-bold text-lg">Experience</p>
                  <p className="text-white opacity-75 pt-1 text-xs">
                    With over a decade of industry experience, we have honed our
                    skills and expertise to deliver outstanding web design and
                    development solutions tailored to your specific
                    requirements.
                  </p>
                </div>
              </div>
              <div className="mt-2 h-1/3 w-full flex justify-between">
                <div className="h-full w-1/5 ">
                  <p className="text-purple-500 text-6xl text-bold">02.</p>
                </div>
                <div className="w-3/4 h-full">
                  <p className="text-white text-bold text-lg">
                    Design Centric Approach
                  </p>
                  <p className="text-white opacity-75 pt-1 text-xs">
                    As a design-centric company, we prioritize creating visually
                    stunning websites that not only captivate your audience but
                    also reflect your brand's unique identity. Our focus on
                    aesthetics ensures an engaging and memorable user
                    experience.
                  </p>
                </div>
              </div>

              <div className="mt-2 h-1/3 w-full flex justify-between ">
                <div className="h-full w-1/5 ">
                  <p className="text-purple-500 text-6xl text-bold">03.</p>
                </div>
                <div className="w-3/4 h-full">
                  <p className="text-white text-bold text-lg">
                    Guaranteed Satisfaction
                  </p>
                  <p className="text-white opacity-75 pt-1 text-xs">
                    Our team takes the time to understand your business
                    objectives and tailor our solutions to meet your specific
                    needs. We strive to exceed your expectations by delivering
                    websites that align with your vision and help you achieve
                    your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 w-full"></div>
        <div className="mt-10 web_projects flex justify-between mb-10">
          <div className="web_project_div ">
            <div className="flex justify-center h-1/3 w-full items-center">
              <AiOutlineFundProjectionScreen className="pt-3 text-bold text-white text-7xl" />
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="pt-3 text-white text-bold text-5xl">5000+</p>
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="text-bold text-white text-54xl">Projects done</p>
            </div>
          </div>
          <div className="web_project_div">
            <div className="flex justify-center h-1/3 w-full items-center">
              <MdGroups className="pt-3 text-bold text-white text-7xl" />
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="pt-3 text-white text-bold text-5xl">20+</p>
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="text-bold text-white text-54xl">Developers</p>
            </div>
          </div>
          <div className="web_project_div">
            <div className="flex justify-center h-1/3 w-full items-center">
              <FaRegHandshake className="pt-3 text-bold text-white text-7xl" />
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="pt-3 text-white text-bold text-5xl">30+</p>
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="text-bold text-white text-54xl">Happy Clients</p>
            </div>
          </div>
          <div className="web_project_div">
            <div className="flex justify-center h-1/3 w-full items-center">
              <FaUserClock className="pt-3 text-bold text-white text-7xl" />
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="pt-3 text-white text-bold text-5xl">10+</p>
            </div>
            <div className="flex justify-center h-1/3 w-full items-center">
              <p className="text-bold text-white text-54xl">Years</p>
            </div>
          </div>
        </div>
        <div className="h-32 w-full"></div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
