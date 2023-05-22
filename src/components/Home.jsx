import "./Home.css";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

import HeadImage from "../assets/amir.png";
import BritamImage from "../assets/britam.png";
import DahabImage from "../assets/dahabshiil.png";
import GuardImage from "../assets/cigna.png";
import LogoImage from "../assets/HandyLogo.png";
import BusinessImage from "../assets/bussiness_times.png";

import "animate.css";

const Home = () => {
  return (
    <div className="home">
      <div className="holder">
        <nav className="navi flex ">
          <div className="mt-4 name flex float-left  h-6 w-1/3">
            <img src={LogoImage} alt="Business Times" className="logo_image" />
            <h3 className="text-white text-left px-0.5 py-0.5 font-semibold">
              Handy Creations
            </h3>
          </div>

          <div className="name float-right flex flex-row justify-end w-3/4">
            <p className=" font-semibold opacity-75 text-white px-6 py-2.5">
              Home
            </p>
            <p className=" font-semibold opacity-75 text-white px-6 py-2.5">
              Service
            </p>
            <p className="font-semibold opacity-75 text-white  px-6 py-2.5">
              About Us
            </p>
            <p className="font-semibold opacity-75 text-white px-6 py-2.5">
              Contact
            </p>
          </div>
        </nav>
        <div>
          <div className="mt-10">
            <h2 className="animate__animated animate__bounceIn text-center head-text">
              We Build Brands
            </h2>
          </div>
          <div className="flex justify-between mt-10">
            <div className="float-left h-96 w-80">
              <p className="animate__animated animate__headShake text-white text-sm opacity-50 align-left py-2.5">
                To ensure you get recognized through Graphic Design, Print Media
                and Web Design, to ensure long term satisfaction.
              </p>
              <p className="animate__animated animate__fadeInLeft text-white text-md py-2.5">
                10000+
              </p>
              <p className=" text-white text-sm opacity-50 align-left">
                Finished Projects
              </p>
              <p className="animate__animated animate__fadeInLeft text-white text-md pt-6 py-2.5">
                5000+
              </p>
              <p className=" text-white text-sm opacity-50 align-left">
                Satisfied Customers
              </p>
            </div>
            <div className="child ">
              <img
                src={HeadImage}
                alt="Background Image"
                style={{ marginTop: "0" }}
              />
            </div>

            <div className="float_right text-right float-right h-96 w-80">
              <p className="animate__animated animate__fadeInRight text-white  text-md py-2.5">
                15+
              </p>
              <p className="text-white  text-sm opacity-50 align-left">
                Dedicated Designers
              </p>
              <p className="animate__animated animate__fadeInRight text-white  text-md pt-6 py-2.5 ">
                70+
              </p>
              <p className="text-white  text-sm opacity-50 align-left">
                Ongoing Projects
              </p>

              <p className="animate__animated animate__headShake text-white pt-6 text-sm opacity-50 align-left py-2.5">
                We've been building bussinesses since 2010. A great expirience
                in serving happy clients.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between h-20">
            <div className="logos_div">
              <img src={BritamImage} alt="Britam" className="image" />
            </div>

            <div className="logos_div">
              <img src={DahabImage} alt="Dahabshiil" className="image" />
            </div>

            <div className="logos_div">
              <img src={GuardImage} alt="Guardian" className="image" />
            </div>

            <div className="logos_div">
              <img src={BusinessImage} alt="Business Times" className="image" />
            </div>
          </div>
        </div>
        <div className="extra"></div>

        <About />
        <div className="extra"></div>
        <Services />
        <div className="extra"></div>
        <Projects />
        <div className="extra"></div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
