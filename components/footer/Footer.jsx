"use client";
import { FaFacebook as Facebook } from "react-icons/fa";
import { FaInstagram as Instagram } from "react-icons/fa";
import { BsLinkedin as Linkedin } from "react-icons/bs";
import { BsTwitterX as Twitter } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <div className="p-3 md:p-20 flex flex-col gap-10">
          <h1 className="text-4xl font-bold md:text-6xl">
            Get in touch with us
          </h1>
          <p>Send your enquiry now!</p>
          <div className="border-[1px] border-gray-200 flex justify-between rounded-full">
            <input
              type="text"
              placeholder="Enter email address"
              className="p-5 rounded-full"
            />
            <button className="bg-[#272e5c] border-[1px] border-white text-white md:p-3 px-5 md:px-14 rounded-full hover:bg-white hover:text-black hover:border-gray-300">
              Request <br />
              Demo
            </button>
          </div>
        </div>
        <div>
          <Image
            className=""
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=1920&q=75"
            alt="map"
            width={"1000"}
            height={"1000"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start  md:px-24 py-20">
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center">
          <Image
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
            width={100}
            height={100}
            alt="ate"
          />
          <p className="text-md mt-5 mb-14">Tomorrows Vision, Today!</p>
          <div className="flex gap-x-5">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Twitter />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 mt-10 md:mt-auto">
          <p className="font-semibold">SITEMAP</p>
          <a href="#">MakeMyWeb.</a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Blogs</a>
          <a href="#">Life at LENS</a>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 mt-2">
          <p className="font-semibold">CONNECT</p>
          <a href="#">+1-517-9300-792</a>
          <a href="#">+91-9990-736-796</a>
          <a href="#">Life at LENS.</a>
        </div>
      </div>

      <div className="w-full flex bg-[#272E5C] p-8 justify-between  mx-auto px-4">
        <p className="text-white text-center">
          2023 LENS, Inc. All rights reserved.
        </p>
        <div className="flex gap-4 text-white text-center">
          <a href="#">Code of conduct</a>
          <a href="#">Sustainability Goals</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
