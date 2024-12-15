import React from "react";
import { heroPart } from "../assets";

const Hero = () => {
  return (
    <section id="/" className="w-full flex flex-col lg:flex-row justify-between px-4 lg:px-16 max-container">

      <div className="lg:ml-24 mt-16 lg:mt-24">
        <p className="font-bold text-lg">Stylish</p>
        <h1 className="mt-4 font-palanquin text-6xl lg:text-8xl tracking-widest uppercase font-light">
          Live For
        </h1>
        <h1 className="mt-4 font-palanquin text-6xl lg:text-8xl text-coral-red font-bold uppercase tracking-[12px] lg:tracking-[20px]">
          Fashion
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 max-w-md">
          Discover stylish clothes arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <p className="font-montserrat text-lg leading-8 uppercase text-coral-red mt-4">
          Save up to 30%
        </p>
        <button className="uppercase border px-4 py-2 mt-4 hover:bg-coral-red hover:text-white-400">shop now</button>
      </div>

      <div className="flex justify-center items-center mt-10 lg:mr-24 lg:mt-0">
        <img
          src={heroPart[0].imgUrl}
          alt={heroPart[0].altText}
          className="h-[600px] lg:h-[800px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
