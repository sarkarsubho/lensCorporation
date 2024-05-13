"use client";

const Services = () => {
  return (
    <div className="bg-[#D6F1F8]">
      <div className="container mx-auto mt-8">
        <div className="w-fit m-auto mb-4">
          <h2 className="text-3xl font-bold mb-4 ">SERVICES</h2>
          <div class="h-1 w-full bg-gradient-to-r from-sky-500 to-lightblue-500 rounded-md"></div>
        </div>
        <h1 className="w-4/5 m-auto text-center text-6xl">
          We provide Artificial Intelligence Services
        </h1>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 px-6">
          <div className="h-[300px] w-fit bg-white rounded-lg p-10">
            <div className="flex items-center">
              <h1 className="text-7xl text-gray-400">01</h1>
              <h2 className="text-4xl text-[#01c99b] font-bold ml-[-50px]  hover:ml-[10px] ease-in-out  duration-300">
                Biometrics
              </h2>
            </div>
            <p className="text-[#908b89] mt-5">
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </p>
          </div>
          <div className="h-[300px] w-auto bg-white rounded-lg p-8">
            <div className="flex items-center">
              <h1 className="text-7xl text-gray-400">02</h1>
              <h2 className="text-4xl text-[#3fbdf1] font-bold ml-[-50px]  hover:ml-[10px] ease-in-out  duration-300">
                Image Analysis
              </h2>
            </div>
            <p className="text-[#908b89] mt-5">
              Outsource the overly complex image analysis work to our
              intelligent machines that adaptively learn, so you can focus on
              making the best decisions for your{" "}
              <business className=""></business>
            </p>
          </div>
          <div className="h-[300px] w-auto bg-white rounded-lg p-8">
            <div className="flex items-center">
              <h1 className="text-7xl text-gray-400">03</h1>
              <h2 className="text-4xl text-[#ff605f] font-bold ml-[-50px]  hover:ml-[10px] ease-in-out  duration-300">
                Cross-Media Translation
              </h2>
            </div>
            <p className="text-[#908b89] mt-5">
              Will something like Siri or Alexa enhance your business? We can
              deliver text-to-speech, text-to-image, speech-to-text,
              speech-to-image, speech-to-image, image-to-text and
              image-to-speech solutions for maximum convenience.
            </p>
          </div>
          <div className="h-[300px] w-auto bg-white rounded-lg p-8">
            <div className="flex items-center">
              <h1 className="text-7xl text-gray-400">04</h1>
              <h2 className="text-4xl text-[#ff605f] font-bold ml-[-50px]  hover:ml-[10px] ease-in-out  duration-300">
                Cross-Media Translation
              </h2>
            </div>
            <p className="text-[#908b89] mt-5">
              Will something like Siri or Alexa enhance your business? We can
              deliver text-to-speech, text-to-image, speech-to-text,
              speech-to-image, speech-to-image, image-to-text and
              image-to-speech solutions for maximum convenience.
            </p>
          </div>
        </div>
      </div>
      <div className="md:relative flex justify-center items-center mt-20 h-[300px] md:h-[580px] lg:h-[500px] bg-[#272e5c]">
        <div
          className={` hidden md:flex`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: "relative",
              display: "block",
              transform: "rotateY(-180deg)",
              fill: "white",
            }}
          >
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
          </svg>
        </div>

        <div className="md:absolute md:bottom-0 w-full md:flex md:justify-between md:items-center  md:pl-10">
          <div className="hidden md:flex">
            <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=750&q=75" />
          </div>
          <div className="w-full md:w-[30%] text-white text-center">
            <h1 className="text-3xl md:text-6xl">
              Meet <span>Tru-AI</span>
            </h1>
            <h3 className="text-2xl my-4">Design. Create. Deploy.</h3>
            <h4>the Future of AI | Power to EDIT</h4>
            <p className="my-4">
              Based On Your Website & Traffic Trends, Tru-AI Optimises Your
              Website
            </p>
            <button className="bg-[#272e5c] border-[1px] border-white text-white p-2 px-5 rounded-md my-5 hover:bg-white hover:text-black hover:border-gray-300">
              Learn More
            </button>
          </div>
          <div className="hidden md:block">
            <div className="rounded-l-full">
              <video
                muted
                autoPlay={true}
                className="h-48 w-full rounded-l-full"
              >
                <source
                  src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
