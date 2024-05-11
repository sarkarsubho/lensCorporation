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
    </div>
  );
};

export default Services;
