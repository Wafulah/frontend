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
        <div className="contact_div justify-between flex ">
          <div className="contacts justify-center">
            <div className="icn mt-6 mx-auto justify-center">
              <FaMapMarkerAlt
                className="text-4xl text-center font-bold"
                style={{ color: "black" }}
              />
            </div>
            <div className="hdn">
              <h3 className="text-black px-5 pt-5 font-bold">
                Our Main Office
              </h3>
              <p className="text-gray-500 pt-2 px-5 text-xs">
                Norwich Union House 2<sup>nd</sup> Floor
              </p>
            </div>
          </div>

          <div className="contacts">
            <div className="icn mt-6 mx-auto justify-center">
              <FaPhone
                className="text-4xl text-center font-bold flip-horizontal"
                style={{ color: "black" }}
              />
            </div>
            <div className="hdn">
              <h3 className="text-black px-5 pt-5 font-bold">Phone Number</h3>
              <p className="text-gray-500 pt-2 px-5 text-xs">
                (+254) 07 03 599 000
              </p>
            </div>
          </div>

          <div className="contacts">
            <div className="icn mt-6 mx-auto justify-center">
              <AiOutlineGlobal
                className="text-4xl text-center font-bold "
                style={{ color: "black" }}
              />
            </div>
            <div className="hdn">
              <h3 className="text-black px-5 pt-5 font-bold">Profiles</h3>
              <p className="text-gray-500 pt-2 px-5 text-sm flex items-center">
                <FaTwitter
                  className="text-base text-center font-bold"
                  style={{ color: "black" }}
                />
                <span className="text-xs ml-2">@handycreations</span>
              </p>
              <p className="text-gray-500 pt-1 px-5 text-sm flex items-center">
                <FaInstagram
                  className="text-base text-center font-bold"
                  style={{ color: "black" }}
                />
                <span className="text-xs ml-2">@handycreationsdesigns</span>
              </p>
            </div>
          </div>

          <div className="contacts">
            <div className="icn mt-6 mx-auto justify-center">
              <FaEnvelope
                className="text-4xl text-center font-bold flip-horizontal"
                style={{ color: "black" }}
              />
            </div>
            <div className="hdn">
              <h3 className="text-black px-5 pt-5 font-bold">Our Email</h3>
              <p className="text-gray-500 pt-2 px-5 text-xs">
                <a
                  href="mailto:info@handycreations.biz"
                  className="text-gray-500 underline hover:text-gray-700"
                >
                  info@handycreations.biz
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="footer_div flex">
          <div className="w-2/4">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-white font-semibold opacity-75"
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
                  className="outline-none py-2.5 px-2.5 decoration-2 text-white bg-inherit border-b border-white w-full placeholder-opacity-25 placeholder-gray-100 text-xs"
                  required
                />
              </div>

              <div className="mt-3">
                <label
                  htmlFor="name"
                  className="text-white font-semibold opacity-75"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="outline-none py-2.5 px-2.5 decoration-2 text-white bg-inherit border-b border-white w-full placeholder-opacity-25 placeholder-gray-100 text-xs"
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="message"
                  className="text-white font-semibold opacity-75"
                >
                  Message:
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="custom-scrollbar outline-none pb-14 py-2.5 px-2.5 decoration-2 text-white bg-inherit border-b border-white w-full placeholder-opacity-25 placeholder-gray-100 text-xs resize-none overflow-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-green-100"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-11/12 h-10 text-current rounded-full bg-white mx-auto mt-3 flex justify-center"
              >
                <p className="font-semibold py-2"> Send Message </p>
              </button>
            </form>
          </div>
          {/* form div */}
          <div className="w-2/4 justify-center">
            <h4 className="smaller-head-text px-20 py-5">Get in touch</h4>
            <p className="px-20 italic text-white text-sm opacity-75">
              Your Brand is what other people say about you when you're not in
              the room.
            </p>
            <p className="px-20 py-5 text-white text-xs opacity-50">
              We have invested in a team of highly expirienced and effective
              staff and a fully equiped workshop at industrial area with
              Heldenberg speedmaster printing machine, Large format-Roland
              printer, A3 Digital Printer and many more.
            </p>
            <div className="flex mt-6 justify-between w-2/4 mx-auto">
              <FaFacebook className="text-white text-4xl cursor-pointer" />
              <FaTwitter className="text-white text-4xl cursor-pointer" />
              <FaInstagram className="text-white text-4xl cursor-pointer" />
              <FaLinkedin className="text-white text-4xl cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-white pt-3 opacity-30 text-center italic text-xs">
          &copy; handycreations 2023.all rights reserved
        </p>
        {/* end of footer */}
      </div>
    </div>
  );
};

export default Contact;
