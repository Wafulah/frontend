import "./Home.css";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Curve from "./Curve";
import ProjectCurve from "./ProjectCurve";
import Products from "./Products";
import MyComponent from './background-anim';
// import { motion } from "framer-motion";
import HeadImage from "../assets/amir.png";
// import BritamImage from "../assets/britam.png";
// import DahabImage from "../assets/dahabshiil.png";
// import GuardImage from "../assets/cigna.png";
import LogoImage from "../assets/HandyLogo.png";
// import TiImage from "../assets/Ti.png";
// import BusinessImage from "../assets/bussiness_times.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "animate.css";

const Home = () => {
  return (
    <div className="2xl:tracking-tighter home">
      <div className="holder">
      <MyComponent />
        <nav className="navi flex ">
          <div className="mt-4 name flex float-left  h-6 w-1/3 2xl:h-5/6 2xl:justify-center 2xl:items-center">
            <img src={LogoImage} alt="Business Times" className="logo_image" />
            <h3 className="text-white text-left px-0.5 py-0.5 font-semibold 2xl:text-4xl 2xl:px-5">
              Handy Creations
            </h3>
          </div>

          <div className=" name float-right flex flex-row justify-end w-3/4 2xl:items-center ">
            <p className="2xl:text-3xl cursor-pointer hover:bg-red-700 font-semibold opacity-75 text-white px-3 py-2.5">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </p>
            <p className="2xl:text-2xl cursor-pointer text-sm hover:bg-red-700 font-semibold opacity-75 text-white px-3 py-2.5">
              <RouterLink to="/design">Graphic Design</RouterLink>
            </p>
            <p className="2xl:text-xl cursor-pointer text-sm hover:bg-red-700 font-semibold opacity-75 text-white px-3 py-2.5">
              <RouterLink to="/web_design">Web Design</RouterLink>
            </p>
            <p className="2xl:text-xl cursor-pointer text-sm hover:bg-red-700 font-semibold opacity-75 text-white px-3 py-2.5">
              <RouterLink to="/interior_design">Interior Design</RouterLink>
            </p>
            {/* <p className="cursor-pointer hover:bg-red-700 font-semibold opacity-75 text-white px-6 py-2.5">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
              >
                Projects
              </Link>
            </p> */}
            {/* <p className="cursor-pointer hover:bg-red-700 font-semibold opacity-75 text-white px-6 py-2.5">
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Products
              </Link>
            </p> */}
            <p className="2xl:text-2xl cursor-pointer text-sm hover:bg-red-700 font-semibold opacity-75 text-white  px-3 py-2.5">
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </p>
            <p className="2xl:text-2xl cursor-pointer text-sm hover:bg-red-700 font-semibold opacity-75 text-white px-3 py-2.5">
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
        <div>
          <div id="home" className="mt-10 ">
          
            <h2 className="animate__animated animate__bounceIn text-center head-text">
              We Build Brands
            </h2>
          </div>
          <div className="flex justify-between mt-10 2xl:mt-20">
            <div className="2xl:w-96 float-left h-96  w-80">
              <p className="hide 2xl:text-2xl animate__animated animate__headShake text-white text-sm opacity-50 align-left py-2.5">
                To ensure you get recognized through Graphic Design, Print Media
                and Web Design, to ensure long term satisfaction.
              </p>
              <p className="2xl:pt-5 2xl:text-4xl animate__animated animate__fadeInLeft text-white text-md py-2.5">
                10000+
              </p>
              <p className="2xl:pt-5 2xl:text-2xl text-white text-sm opacity-50 align-left">
                Finished Projects
              </p>
              <p className="2xl:pt-5 2xl:pt-5 2xl:text-4xl animate__animated animate__fadeInLeft text-white text-md pt-6 py-2.5">
                5000+
              </p>
              <p className="2xl:pt-5 2xl:text-2xl text-white text-sm opacity-50 align-left">
                Satisfied Customers
              </p>
            </div>
            <div className="hide flex justify-center items-center child ">
              <img
                src={HeadImage}
                alt="Background Image"
                // style={{ maginTop: "0" }}
                className="mt-0 2xl:bg-cover 2xl:h-full 2xl:w-full "
              />
            </div>

            <div className="2xl:w-96 float_right text-right float-right h-96 w-80">
              <p className="2xl:text-4xl animate__animated animate__fadeInRight text-white  text-md py-2.5">
                15+
              </p>
              <p className="2xl:pt-5 2xl:pb-3 2xl:text-2xl text-white  text-sm opacity-50 align-left">
                Dedicated Designers
              </p>
              <p className="2xl:pt-8 2xl:text-4xl animate__animated animate__fadeInRight text-white  text-md pt-6 py-2.5 ">
                70+
              </p>
              <p className="2xl:py-3 2xl:text-2xl text-white  text-sm opacity-50 align-left">
                Ongoing Projects
              </p>

              <p className="hide 2xl:pt-8 2xl:text-2xl animate__animated animate__headShake text-white pt-6 text-sm opacity-50 align-left py-2.5">
                We've been building bussinesses since 2010. A great expirience
                in serving happy clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of holder div */}
      <div className="extra"></div>
      <div id="about">
        <Curve />

        <About />
      </div>
      <div className=" extra"></div>

      <div id="services" >
        <Services />
        <div className=" extra"></div>
      </div>
      <div id="projects">
        <ProjectCurve />
        <Projects />
      </div>
      <div id="products">
        <Products />
      </div>
      <div className="extra"></div>
      <div className="contact-holder">
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
