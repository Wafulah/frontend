import "./About.css";
import AboutImage from "../assets/cherry.jpg";


const About = () => {
  return (
    <div>
      <div>
        <h4 className="small-head-text">Learn More About Us</h4>
      </div>
      <div className="flex justify-between">
        <div className="w-2/4 mt-20">
          <h3 className="text-white text-xl font-semibold">Mission</h3>
          <p className="text-white opacity-75 pr-20">
            To meet all of the personal, small businesses and commercial
            branding needs of our customers in the most affordable manner while
            maintaining the highest degree of quality work in a timely manner.
          </p>

          <h3 className="text-white text-xl font-semibold pt-10">Vision</h3>
          <p className="text-white opacity-75 pr-20">
            The market will be increasingly more reliant on printed material and
            web design for marketing and advertising. Handy creations will be
            the most sort after provider for these solutions.
          </p>

          <h3 className="text-white text-xl font-semibold pt-10">
            Corporate Objective
          </h3>
          <p className="text-white opacity-75 pr-20">
            We strive to make our clients the leaders by choosing the right
            brand that fits the company’s image. <br /><br />
            Our priority is to ensure you
            get recognized through Graphic Design, Print Media and Web Design,
            to ensure long term satisfaction.
          </p>
        </div>
        <div className="img_div  mt-32 ">
          <img
            src={AboutImage}
            alt="Background Image"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
