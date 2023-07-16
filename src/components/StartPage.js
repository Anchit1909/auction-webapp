import React from "react";
import heroImg from "../assets/hero_image.svg";

const start = () => {
  return (
    <section className="bg-light">
      <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-700">
            Online Auction System
          </h1>
          <p className="max-w-2xl mb-6 font-normal text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
            Experience the thrill of bidding from the comfort of your own home
            with our seamless online auction system. Discover a vast array of
            unique items, from collectibles to art, and compete against fellow
            enthusiasts to secure your next prized possession.
          </p>
          <a
            href="/auction"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#C978B1] hover:bg-[#da80bf] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Learn More
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImg} alt="mockup" height={600} width={600} />
        </div>
      </div>
    </section>
  );
};

export default start;
