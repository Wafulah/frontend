import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API

    // Reset form fields after submission
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div>
      <div>
        <div className="sm:block sm:items-center  sm:justify-center contact_div  flex ">
          <div className="sm:w-full  sm:h-2/5 flex  w-1/2 h-full">
            <div className=" sm:mx-auto   contacts justify-center">
              <div className="icn mt-6 mx-auto justify-center">
                <FaMapMarkerAlt
                  className="2xl:text-6xl text-4xl text-center font-bold"
                  style={{ color: "rgb(161, 4, 4)" }}
                />
              </div>
              <div className="hdn">
                <h3 className="2xl:text-3xl text-black px-5 pt-5 font-bold">
                  Our Main Office
                </h3>
                <p className="2xl:text-xl text-gray-500 pt-2 px-5 text-xs">
                  Norwich Union House 2<sup>nd</sup> Floor
                </p>
              </div>
            </div>

            <div className="  mx-auto contacts ">
              <div className="icn mt-6 mx-auto justify-center">
                <FaPhone
                  className="2xl:text-6xl text-4xl text-center font-bold flip-horizontal"
                  style={{ color: "rgb(161, 4, 4)" }}
                />
              </div>
              <div className="hdn">
                <h3 className="2xl:text-3xl text-black px-5 pt-5 font-bold">
                  Phone Number
                </h3>
                <p className="2xl:text-xl text-gray-500 pt-2 px-5 text-xs">
                  (+254) 07 03 599 000
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-full sm:h-2/5 sm:mt-6 flex  w-1/2 h-full">
            <div className="  mx-auto contacts">
              <div className="icn mt-6 mx-auto justify-center">
                <AiOutlineGlobal
                  className="2xl:text-6xl text-4xl text-center font-bold "
                  style={{ color: "rgb(161, 4, 4)" }}
                />
              </div>
              <div className="hdn">
                <h3 className="2xl:text-3xl text-black px-5 pt-5 font-bold">
                  Profiles
                </h3>
                <p className="text-gray-500 pt-2 px-5 text-sm flex items-center">
                  <FaTwitter
                    className="2xl:text-6xl text-base text-center font-bold"
                    style={{ color: "rgb(161, 4, 4)" }}
                  />
                  <span className="2xl:text-xl text-xs ml-2">
                    @handycreations
                  </span>
                </p>
                <p className="sm:break-words sm:px-0 text-gray-500 pt-1 px-5 text-sm flex items-center">
                  <FaInstagram
                    className="2xl:text-6xl text-base text-center font-bold"
                    style={{ color: "rgb(161, 4, 4)" }}
                  />
                  <span className="sm:break-words 2xl:text-xl text-xs ml-2">
                    @handycreationsdesigns
                  </span>
                </p>
              </div>
            </div>

            <div className="  mx-auto contacts">
              <div className="icn mt-6 mx-auto justify-center">
                <FaEnvelope
                  className="2xl:text-6xl text-4xl text-center font-bold flip-horizontal"
                  style={{ color: "rgb(161, 4, 4)" }}
                />
              </div>
              <div className="hdn">
                <h3 className="2xl:text-3xl text-black px-5 pt-5 font-bold">
                  Our Email
                </h3>
                <p className="text-gray-500 pt-2 px-5 text-xs">
                  <a
                    href="mailto:info@handycreations.biz"
                    className="sm:break-words 2xl:text-xl text-gray-500 underline hover:text-gray-700"
                  >
                    info@handycreations.biz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="sm:block footer_div flex">
          <div className="sm:w-11/12 sm:mx-auto w-2/4 ">
            <div className="sm:w-full w-4/5 mx-auto">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="2xl:text-3xl text-white font-semibold opacity-75"
                  >
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Enter a valid email address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="2xl:text-xl outline-none py-2.5 px-2.5 decoration-2 text-white bg-inherit border-b border-white w-full placeholder-opacity-25 placeholder-gray-100 text-xs"
                    required
                  />
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="name"
                    className="2xl:text-3xl text-white font-semibold opacity-75"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="2xl:text-xl outline-none py-2.5 px-2.5 decoration-2 text-white bg-inherit border-b border-white w-full placeholder-opacity-25 placeholder-gray-100 text-xs"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="message"
                    className="2xl:text-3xl text-white font-semibold opacity-75"
                  >
                    Message:
                  </label>

                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    className="2xl:text-2xl custom-scrollbar outline-none pb-14 py-2.5 px-2.5 decoration-2 text-white bg-inherit border-b border-white w-full placeholder-opacity-25 placeholder-gray-100 text-xs resize-none overflow-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-green-100"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="2xl:h-24 w-11/12 h-10 text-current rounded-full bg-white mx-auto mt-3 flex justify-center items-center"
                >
                  <p className="2xl:text-3xl font-semibold py-2">
                    {" "}
                    Send Message{" "}
                  </p>
                </button>
              </form>
            </div>
          </div>
          {/* form div */}
          <div className="sm:w-full w-2/4 justify-center">
            <h4 className="sm:px-1 smaller-head-text px-20 py-5">
              Get in touch
            </h4>
            <p className="sm:px-5 2xl:text-3xl 2xl:pt-10 2xl:pr-6 px-20 italic text-white text-sm opacity-75">
              Your Brand is what other people say about you when you're not in
              the room.
            </p>
            <p className="sm:px-9 2xl:text-xl px-20 py-5 text-white text-xs opacity-50">
              We have invested in a team of highly expirienced and effective
              staff and a fully equiped workshop at industrial area with
              Heldenberg speedmaster printing machine, Large format-Roland
              printer, A3 Digital Printer and many more.
            </p>
            <div className="sm:w-11/12 2xl:w-3/5 flex mt-6 justify-between w-2/4 mx-auto">
              <FaFacebook className="2xl:text-5xl text-white text-4xl cursor-pointer" />
              <FaTwitter className="2xl:text-5xl text-white text-4xl cursor-pointer" />
              <FaInstagram className="2xl:text-5xl text-white text-4xl cursor-pointer" />
              <FaLinkedin className="2xl:text-5xl text-white text-4xl cursor-pointer" />
            </div>
            <p className="sm:pt-10 2xl:pt-0 2xl:text-lg text-white pt-3 opacity-30 text-center italic text-xs">
              &copy; handycreations 2023.all rights reserved
            </p>
          </div>
        </div>

        {/* end of footer */}
      </div>
    </div>
  );
};

export default Contact;
