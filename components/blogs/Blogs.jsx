import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[#fcfbf7] mt-8">
      <div className="w-fit m-auto mb-4">
        <h2 className="text-3xl font-bold mb-4 mt-4">OUR BLOGS</h2>
        <div class="h-1 w-full bg-gradient-to-r from-sky-500 to-lightblue-500 rounded-md"></div>
      </div>
      <div>
        <p className="text-bold text-6xl text-center"> Inhouse Mindscape</p>

        <div className="w-[80%] m-auto">
          <div className="flex flex-col md:flex-row justify-center gap-5 py-20">
            <div className="group md:w-[400px] h-[500px] flex flex-col justify-between bg-white p-7 rounded-lg">
              <h3 className="text-xl text-red-500">New!</h3>
              <h1 className=" text-2xl">New! Generative AI</h1>
              <div className="bg-[#fff6cd] p-5 rounded-lg">
                <p>
                  In todays data-driven marketing world, keeping up with
                  content creation demands can be a challenge. Read our latest
                  blog to explore the power of Generative AI and its potential
                  to reshape the marketing landscape....
                </p>
              </div>
              <a
                href="#"
                className="mt-5 text-red-600 hidden group-hover:block ease-in-out duration-300"
              >
                Read More &gt;&gt;
              </a>
            </div>
            <div className="group md:w-[400px] h-[500px] flex flex-col justify-between bg-white p-7 rounded-lg">
              <h3>April 25, 2024</h3>
              <h1 className=" text-2xl">
                April 25, 2024 The Evolution of AI in Games
              </h1>
              <div>
                <p className="bg-[#e2f2ff] p-5 rounded-lg">
                  The integration of artificial intelligence (AI) within the
                  gaming industry has been a remarkable journey, marked by
                  continual innovation. Read our latest blog to dive deep into
                  the fascinating history of AI in games and discover the
                  evolution that continues to shape the future of play!...
                </p>
              </div>
              <a
                href="#"
                className="mt-5 text-red-600 hidden group-hover:block ease-in-out duration-300"
              >
                Read More &gt;&gt;
              </a>
            </div>
          </div>

          <div className="group  md:w-[80%] m-auto md:h-[300px] flex flex-col justify-between bg-white p-7 rounded-lg">
            <h3>April 18, 2024</h3>
            <h1 className=" text-2xl">
              Unmasking the Misconceptions of Artificial Intelligence in the
              Workplace
            </h1>
            <div>
              <p className="bg-[#ffe7e6] p-5 rounded-lg">
                The rise of Artificial Intelligence (AI) has sparked both
                excitement and apprehension. Many professionals are unsure how
                AI impacts their work....
              </p>
            </div>
            <a
              href="#"
              className="mt-5 text-red-600 hidden group-hover:block ease-in-out duration-300"
            >
              Read More &gt;&gt;
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button className="bg-white text-black border-[1px] border-black p-3 px-7 rounded-md mt-5 hover:bg-black hover:text-white hover:border-gray-300">
            Explore More
          </button>
        </div>
      </div>
      <h1 className="font-raleway font-semibold  text-center text-3xl md:text-4xl">
        We Work With Amazing Clients
      </h1>
      <div className="flex flex-col md:flex-row gap-x-5 justify-center items-center p-10">
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=640&q=75"
          width={200}
          height={200}
          alt="ate"
        />
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=640&q=75"
          width={200}
          height={200}
          alt="ate"
        />
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=640&q=75"
          width={200}
          height={200}
          alt="ate"
        />
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=256&q=75"
          width={200}
          height={200}
          alt="ate"
        />
      </div>
      <div className="bg-[#272e5c] py-14">
        <h1 className="text-center text-3xl text-white">By the numbers</h1>
        <div className="flex justify-center text-center md:gap-x-20 text-white pt-10">
          <div className="w-auto md:w-[100px]">
            <h1 className="text-2xl md:text-4xl">15 +</h1>
            <h3 className="text-md">Solutions for Global crises</h3>
          </div>
          <div className="border-l-2" />
          <div className="w-auto md:w-[100px]">
            <h1 className="text-2xl md:text-4xl">10 +</h1>
            <h3 className="text-md">University Collaborations</h3>
          </div>
          <div className="border-l-2" />
          <div className="w-auto md:w-[100px]">
            <h1 className="text-2xl md:text-4xl">25 +</h1>
            <h3 className="text-md">Employees Worldwide</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
