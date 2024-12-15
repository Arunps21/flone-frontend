import React from "react";
import { heroPart } from "../assets";

const Hero = () => {
  return (
    // <section id="/" className="w-full flex flex-col lg:flex-row justify-between px-4 lg:px-16 max-container">

    //   <div className="lg:ml-24 mt-16 lg:mt-24">
    //     <p className="font-bold text-lg">Stylish</p>
    //     <h1 className="mt-4 font-palanquin text-6xl lg:text-8xl tracking-widest uppercase font-light">
    //       Live For
    //     </h1>
    //     <h1 className="mt-4 font-palanquin text-6xl lg:text-8xl text-coral-red font-bold uppercase tracking-[12px] lg:tracking-[20px]">
    //       Fashion
    //     </h1>

    //     <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 max-w-md">
    //       Discover stylish clothes arrivals, quality comfort, and innovation for
    //       your active life.
    //     </p>
    //     <p className="font-montserrat text-lg leading-8 uppercase text-coral-red mt-4">
    //       Save up to 30%
    //     </p>
    //     <button className="uppercase border px-4 py-2 mt-4 hover:bg-coral-red hover:text-white-400">shop now</button>
    //   </div>

    //   <div className="flex justify-center items-center mt-10 lg:mr-24 lg:mt-0">
    //     <img
    //       src={heroPart[0].imgUrl}
    //       alt={heroPart[0].altText}
    //       className="h-[600px] lg:h-[800px] object-cover"
    //     />
    //   </div>
    // </section>


<section className="flex flex-col sm:flex-row justify-around max-width bg-slate-100 relative">
  {/* Right side (Image) */}
  <div className="order-1 sm:order-2 w-full sm:w-1/2 sm:mr-20">
    <img
      src={heroPart[0].imgUrl}
      alt={heroPart[0].altText}
      className="w-full h-[300px] sm:h-[500px] object-cover"
    />
  </div>

  {/* Left side (Content) */}
  <div className="order-2 sm:order-1 w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-5">
        <p className="w-8 md:w-11 h-[2px] bg-black"></p>
        <p className="font-bold text-sm sm:text-lg">Stylish</p>
        <p className="w-8 md:w-11 h-[2px] bg-black"></p>
      </div>
      <h1 className="mt-4 text-2xl sm:text-4xl font-bold uppercase">
        Men's <span className="text-coral-red">Fashion</span>
      </h1>
      <p className="font-montserrat text-lg leading-8 uppercase text-coral-red mt-4">
        Save up to 30%
      </p>
      <button className="uppercase border px-4 py-2 mt-4 hover:bg-coral-red hover:text-white-400">
        Shop Now
      </button>
    </div>
  </div>
</section>
  );
};

export default Hero;
