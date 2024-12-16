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

    <section class="flex flex-col sm:flex-row justify-around max-w-screen-xl mx-auto relative py-16 px-6">
      <div class="order-1 sm:order-2 w-full sm:w-1/2 sm:mr-10">
        <img
          src={heroPart[0].imgUrl}
          alt="Stylish Men's Fashion"
          class="w-full h-[300px] sm:h-[500px] object-cover "
        />
      </div>

      <div class="order-2 sm:order-1 w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div class="text-center sm:text-left">
          <div class="flex justify-center sm:justify-start items-center gap-5">
            <p class="w-8 md:w-11 h-[2px] bg-black"></p>
            <p class="font-bold text-sm sm:text-lg uppercase text-gray-600">
              Stylish
            </p>
            <p class="w-8 md:w-11 h-[2px] bg-black"></p>
          </div>
          <h1 class="mt-4 text-3xl sm:text-5xl font-bold uppercase text-gray-800">
            Men's <span class="text-red-500">Fashion</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 leading-8 uppercase mt-4">
            Save up to <span class="text-red-500 font-bold">30%</span>
          </p>
          <button class="uppercase border px-6 py-3 mt-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
