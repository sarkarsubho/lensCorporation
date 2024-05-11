"use client";

const Hero = () => {
    return (
      <div className="bg-cover bg-center h-screen pl-10" style={{ backgroundImage: 'url(https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75)' }}>
        <div className="container mx-auto h-full flex flex-col justify-center items-left text-left text-white">
          <h1 className="w-3/5 text-black text-4xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-8xl font-bold mb-4">We are at the forefront of AI</h1>
          <p className="text-lg mb-8 text-black font-bold">From Conserving Wildlife to Automatically Generating Caricatures We Do It All</p>
          <button className="bg-black w-fit hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">learn More</button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  