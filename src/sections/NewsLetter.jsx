import React from "react";

const NewsLetter = () => {
  const handleSubmit=(event)=>{
    event.preventDefault()
  }
  return (
    <section className="text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start justify-center sm:py-12 px-4 sm:px-8">
      <div className="sm:w-1/2 mb-6 sm:mb-0">
        <h1 className="text-2xl sm:text-4xl font-medium text-gray-800">
          Sign Up for <span className="text-gray-500">Updates</span> & Newsletter
        </h1>
        <div className="w-[400px] sm:w-[500px]">
          <p className="text-gray-400 mt-3 text-xs">
            Stay updated with the latest trends, exclusive offers, and new
            arrivals. Subscribe to our newsletter and never miss out!
          </p>
        </div>{" "}
      </div>

      <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex items-center gap-3  sm:ml-6 my-6 sm:my-0 border pl-3 sm:h-[100px]">
        <input
          className="w-full sm:flex-1 outline-none border-none py-3 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4 uppercase sm:mr-5"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
