import "./About.css";
import AboutImage from "../assets/cherry.jpg";
import MsImage from "../assets/mission.svg";
import VsImage from "../assets/vision.svg";
import ObImage from "../assets/objective.svg";

import "animate.css";

const About = () => {
  return (
    <div className="  curved_div ">
      <div className="w-11/12 h-full mx-auto">
        <div className="flex justify-center">
          <p className="text-4xl pt-1 text_grey font-bold "></p>
        </div>

        <div className="w-4/5 h-full mx-auto ">
          <div className="sm:block mt-14 h-full flex justify-between">
            <div className=" about_info_div ">
              <div className="2xl:h-3/5 2xl:w-4/5 h-2/4 w-3/4 mt-5 mx-auto ">
                <img
                  src={MsImage}
                  className="h-full w-full bg-contain"
                  alt="mission"
                />
              </div>
              <div className=" w-4/5 mx-auto ">
                <h3 className="2xl:text-2xl text-black opacity-75 font-bold">
                  Mission
                </h3>
                <p className="2xl:text-lg 2xl:py-0 text_grey font-semibold animate__animated animate__fadeInLeft text-xs py-2 opacity-50 ">
                  To meet all of the personal, small businesses and commercial
                  branding needs of our customers in the most affordable manner
                  while maintaining the highest degree of quality work in a
                  timely manner.
                </p>
              </div>
            </div>
            <div className="about_info_div ">
              <div className="2xl:h-3/5 2xl:w-4/5 h-2/4 w-3/4 mt-5 mx-auto ">
                <img
                  src={VsImage}
                  className="h-full w-full bg-contain"
                  alt="mission"
                />
              </div>
              <div className=" w-3/4 mx-auto ">
                <h3 className="2xl:text-2xl text-black opacity-75 font-bold">
                  Vision
                </h3>
                <p className="2xl:text-lg 2xl:py-0 text_grey font-semibold animate__animated animate__fadeInLeft text-xs py-2 opacity-50 ">
                  The market will be increasingly more reliant on printed
                  material and web design for marketing and advertising. Handy
                  creations will be the most sort after provider for these
                  solutions.
                </p>
              </div>
            </div>
            <div className="about_info_div ">
              <div className="2xl:h-3/5 2xl:w-4/5 h-2/4 w-3/4 w-3/4 mt-5 mx-auto ">
                <img
                  src={ObImage}
                  className="h-full w-full bg-contain"
                  alt="mission"
                />
              </div>
              <div className=" w-3/4 mx-auto ">
                <h3 className="2xl:text-2xl text-black opacity-75 font-bold">
                  Objectives
                </h3>
                <p className="2xl:text-lg 2xl:py-0 text_grey font-semibold animate__animated animate__fadeInLeft text-xs py-2 opacity-50 ">
                  We strive to make our clients the leaders by choosing the
                  right brand that fits the company’s image. Our priority is to
                  ensure you get recognized to ensure long term satisfaction.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-2/4 mt-20">
          <h3 className="text-white text-xl font-semibold">Mission</h3>
          <p className="animate__animated animate__fadeInLeft text-white opacity-75 pr-20">
            To meet all of the personal, small businesses and commercial
            branding needs of our customers in the most affordable manner while
            maintaining the highest degree of quality work in a timely manner.
          </p>

          <h3 className="text-white text-xl font-semibold pt-10">Vision</h3>
          <p className="animate__animated animate__fadeInLeft text-white opacity-75 pr-20">
            The market will be increasingly more reliant on printed material and
            web design for marketing and advertising. Handy creations will be
            the most sort after provider for these solutions.
          </p>

          <h3 className="text-white text-xl font-semibold pt-10">
            Corporate Objective
          </h3>
          <p className="animate__animated animate__fadeInLeft text-black opacity-75 pr-20">
            We strive to make our clients the leaders by choosing the right
            brand that fits the company’s image. <br /><br />
            Our priority is to ensure you
            get recognized through Graphic Design, Print Media and Web Design,
            to ensure long term satisfaction.
          </p>
        </div> */}
          {/* <div className="img_div  mt-32 ">
          <img
            src={AboutImage}
            alt="Background Image"
            className="h-full w-full object-cover rounded-lg"
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
