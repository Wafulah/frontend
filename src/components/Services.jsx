import React, { useState, useEffect, useRef } from "react";
import { FaKeycdn, FaTimes } from "react-icons/fa";
import "./Services.css";

const Popup = ({ onClose }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll the content_div to the top when the popup is opened
    contentRef.current.scrollTop = 0;

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling on the body when the popup is closed
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="service_glassmorphism popup">
      <div className=" popup-content">
        <div ref={contentRef} className="overflow-y-auto content_div">
          <div className="close-btn-container">
            <button className="close-btn" onClick={onClose}>
              <FaTimes className="close-icon" />
            </button>
          </div>
          <div className="mx-auto w-3/4 ">
            <p className="text-4xl pt-3 text_grey font-bold ">about us</p>
            <p className="lucid_font text-lg pt-3 text_grey font-bold ">
              Handy Creations <br />
              Norwich Union House, 2nd Floor, Mama Ngina Street. <br />
              P. O. Box 2368 - 00100 Nairobi Kenya. <br />
              Tel: +254 20 2633038 | Mobile: +254 703 599 000 <br />
              Web: www.handycreations.biz | Email:info@handycreations.biz
              <br />
            </p>
            <p className="lucid_font pt-5 pb-10 font-semibold opacity-75">
              Handy Creations is a leading graphic design and web design company
              based in Nairobi, Kenya. With over a decade of experience since
              our establishment in 2010, we strive to ensure our clients'
              long-term satisfaction through our services in graphic design,
              print media, and web design. <br />
              <br />
              Our company is located at Norwich Union House, conveniently
              situated on Mama Ngina Street. We are committed to delivering
              high-quality design solutions that help businesses and individuals
              get recognized and leave a lasting impression. Whether it's
              creating logos and letterheads, designing posters and banners, or
              developing complete corporate identity packages, we offer a wide
              range of services to meet your branding needs.
              <br />
              <br />
              At Handy Creations, we understand the importance of a strong brand
              identity. Our team of experienced graphic designers works closely
              with our clients to develop brand positions, promises,
              personalities, and stories that resonate with their target
              audiences. We believe in building brands that stand out and make a
              meaningful impact in the market.
              <br />
              <br />
              In addition to our graphic design services, we also specialize in
              web design. We believe that a professional and visually appealing
              website is crucial for the success of any individual or company.
              Whether you need a brand new website or want to refresh your
              existing one, our web design professionals are here to help. We
              guide you through the entire process, ensuring that your website
              not only looks great but also reflects the quality of your brand.
              <br />
              <br />
              To complement our design services, we also offer domain
              registration, web hosting, social media management, strategic
              consultation, lead generation, customer retention, SMS marketing,
              and email marketing solutions. Our goal is to provide
              comprehensive and affordable business solutions that help our
              clients achieve their marketing and branding objectives.
              <br />
              <br />
              You can rely on Handy Creations to deliver exceptional results. We
              are dedicated to continuous improvement, ensuring that we stay
              up-to-date with the latest design trends and technologies. Our
              commitment to quality, service, and productivity sets us apart as
              a trusted provider in the industry.
              <br />
              <br />
              Contact us today to discuss your design and branding needs. We
              look forward to working with you and helping your brand shine.
            </p>
            <div className="footer flex justify-center">
              <p className="lucid_font pb-5 italic text-sm opacity-50">
                &copy; 2023handycreations. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLearnMoreClick = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <div>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <div className="text-center w-2/4 mx-auto">
        <h4 className="smaller-head-text">Our Services</h4>
        <p className="text-white opacity-50 mt-10">
          We know how! Our business solutions strategies will build your brand
          and customer base to set you up for long-term success
        </p>
      </div>
      <div className="flex mx-auto justify-between mt-10 services_div">
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
              <h3
                className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
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
              <h3
                className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
            </div>
          </div>
        </div>
        <div className="glassmorphism w-1/3 h-80 border-10 m-2">
          <h3 className="text-white px-5 py-7 font-bold">Web Design</h3>
          <p className="text-white opacity-75 px-5">
            Experience the artistry of seamless user experiences with our
            cutting-edge web design services.
          </p>
          <div className="flex ml-5 mt-10 h-10">
            <div>
              <FaKeycdn style={{ color: "white", fontSize: "2.2rem" }} />
            </div>
            <div>
              <h3
                className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </h3>
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
              <h3
                className="cursor-pointer text-white px-5 py-2 underline decoration-2 font-bold"
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
