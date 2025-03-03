import React from "react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";

const Openings = () => {
  return (
    <div className="relative w-full px-6 lg:px-40 lg:mt-20 mt-28 lg:py-10 lg:mb-20 mb-28 z-20 justify-center items-center text-center">
      <h5 className="text-white text-4xl font-bold">Current Openings :</h5>
      <Link href="/opening-usa">
        <div className="text-white w-full justify-center text-center items-center flex mt-8 bg-blueLight/20 px-8 py-5 rounded-xl border border-orangeLight/50 hover:bg-blueLight/30 transition-all hover:-translate-y-2 backdrop-blur-sm cursor-pointer hover:shadow-md hover:shadow-orangeLight/50">
          <h4 className="flex items-center space-x-2 text-2xl">
            <FaGlobe />{" "}
            <span>
              One year paid internship in the hospitality industry -{" "}
              <span className="text-orangeLight">OnSite/USA</span>
            </span>
            <img src="/usa.png" className="w-10" />
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default Openings;
