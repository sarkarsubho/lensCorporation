"use client";

import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="w-fit m-auto mb-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <div class="h-1 w-full bg-gradient-to-r from-sky-500 to-lightblue-500 rounded-md"></div>
        </div>
        <div className="flex justify-between w-full bg-[#e2f2ff] mt-20 rounded-xl p-10 hover:scale-110 ease-in-out  duration-300">
        <div className="w-[40%]">
          <h1 className="text-5xl text-bold mt-10">Welcome To LENS</h1>
          <p className="my-10">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have
            to.
          </p>
          <button className="bg-black text-white p-2 px-4 rounded-md mt-5 hover:bg-white hover:text-black hover:border-gray-300">
            Learn More
          </button>
        </div>
        <div className="w-[40%] h-[300px] p-2 border-2 border-white rounded-xl bg-white hover:border-0">
          <Image    src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=828&q=75" alt="team image"
            className="h-[100%] w-full object-cover rounded-lg hover:scale-110 ease-in-out  duration-300"
          />
        </div>
      </div>

      </div>
    </div>
  );
};

export default About;
