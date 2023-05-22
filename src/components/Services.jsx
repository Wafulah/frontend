import { FaKeycdn } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div >
      <div className=" text-center w-2/4 mx-auto">
        <h4 className="smaller-head-text">Our Services</h4>
        <p className="text-white opacity-50 mt-10">
          We know how! Our business solutions strategies will build your brand
          and customer base to set you up for long-term success
        </p>
      </div>
      <div className="flex mx-auto justify-between mt-10 services_div ">
        <div className="glassmorphism w-1/3 h-80 border-10 m-2">
          <h3 className="text-white px-5 py-7 font-bold">Graphic Design</h3>
          <p className="text-white opacity-75 px-5">
            Unleash the power of creativity with our exceptional graphic design
            services.
          </p>
          <div className="flex ml-5 mt-16 h-10">
            <div>
              <FaKeycdn style={{ color: "white", fontSize: "2.2rem" }} />
            </div>
            <div>
              <h3 className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold">Learn More</h3>
            </div>
          </div>
        </div>
        <div className="glassmorphism w-1/3 h-80 border-10 m-2">
          <h3 className="text-white px-5 py-7 font-bold">Branding</h3>
          <p className="text-white opacity-75 px-5">
            Elevate your brand identity with our comprehensive branding
            solutions.
          </p>
          <div className="flex ml-5 mt-16 h-10">
            <div>
              <FaKeycdn style={{ color: "white", fontSize: "2.2rem" }} />
            </div>
            <div>
              <h3 className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold">Learn More</h3>
            </div>
          </div>
        </div>
        <div className="glassmorphism w-1/3 h-80 border-10 m-2">
          <h3 className="text-white px-5 py-7 font-bold">Web Design</h3>
          <p className="text-white opacity-75 px-5">
            Experience the artistry of seamless user experiences with our
            cutting-edge web design services
          </p>
          <div className="flex ml-5 mt-10 h-10">
            <div>
              <FaKeycdn style={{ color: "white", fontSize: "2.2rem" }} />
            </div>
            <div>
              <h3 className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold">Learn More</h3>
            </div>
          </div>
        </div>
        <div className="glassmorphism w-1/3 h-80 border-10 m-2">
          <h3 className="text-white px-5 py-7 font-bold">Printing</h3>
          <p className="text-white opacity-75 px-5">
            Elevate your brand with our exceptional printing services, turning
            designs into art with precision and quality.
          </p>
          <div className="flex ml-5 mt-10 h-10">
            <div>
              <FaKeycdn style={{ color: "white", fontSize: "2.2rem" }} />
            </div>
            <div>
              <h3 className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold">Learn More</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
