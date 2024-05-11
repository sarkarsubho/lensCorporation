"use client";

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
          <img
            src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=828&q=75"
            className="h-[100%] w-full object-cover rounded-lg hover:scale-110 ease-in-out  duration-300"
          />
        </div>
      </div>

        {/* <div class="relative w-64 h-48 bg-gray-200 rounded-md overflow-hidden shadow-md">
          <div class="w-full h-full transition-transform transform-gpu hover:scale-105">
            <img
              src="your_photo_url"
              alt="Photo"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <h2 class="text-white text-xl font-bold mb-2">Heading</h2>
            <p class="text-white text-center mb-4">Description goes here...</p>
            <a
              href="#"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div> */}
        {/*        
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare
          fermentum eros, id faucibus felis tincidunt et.
        </p>
        <p className="mb-4">
          Pellentesque vitae enim sapien. Nulla facilisi. Proin eu mauris a
          nulla aliquam fermentum.
        </p>
        <p>
          Quisque pharetra, nisi a tempus suscipit, magna nulla varius ligula,
          at placerat leo justo eget orci.
        </p> */}
      </div>
    </div>
  );
};

export default About;
