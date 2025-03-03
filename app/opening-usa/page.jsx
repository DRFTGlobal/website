import React from "react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";
import CareerBlock from "./../../components/CareerBlock";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const page = () => {
  return (
    <div className="text-white justify-center items-center pb-10">
      <div className="w-full fixed top-0 flex items-center justify-between py-8 lg:px-20 px-5 backdrop-blur-md">
        <Link href="/">
          <img src="/Logo.png" alt="" className="lg:w-36 w-32" />
        </Link>
        <Link href="/" className="text-lg hover:text-orangeLight">
          Back to Home
        </Link>
      </div>
      <div className=" w-full flex justify-center items-center mt-40 lg:px-32 px-5">
        <div className="lg:w-4/5 lg:px-0 px-5">
          <h4 className="flex items-center space-x-2 lg:text-5xl text-4xl font-bold text-center leading-snug">
            <span>
              One year paid internship in the hospitality industry <br />
              <span className="text-orangeLight flex justify-center items-center font-semibold">
                OnSite/USA
                <img src="/usa.png" className="w-10" />
              </span>
            </span>
          </h4>
          <p className="text-white lg:mt-16 mt-10 text-lg lg:text-justify text-center px-8 lg:px-0">
            We are looking for passionate and skilled professionals to join
            renowned hotels in the United States for the following positions:
          </p>

          <div className="w-full lg:space-x-5 space-y-5 lg:space-y-0 mt-10 text-2xl lg:flex items-center text-center lg:text-start cursor-default justify-center">
            <div className="border border-orangeLight px-5 rounded-xl bg-orangeLight/10 py-2 w-auto">
              Chef
            </div>
            <div className="border border-orangeLight px-5 rounded-xl bg-orangeLight/10 py-2 w-auto">
              Food & Beverage
            </div>
            <div className="border border-orangeLight px-5 rounded-xl bg-orangeLight/10 py-2 w-auto">
              Front Office
            </div>
            <div className="border border-orangeLight px-5 rounded-xl bg-orangeLight/10 py-2 w-auto">
              Various Other Hotel Roles
            </div>
          </div>

          <div className="lg:flex mt-10 lg:space-x-5 space-y-5 lg:space-y-0 justify-center cursor-default">
            <h2 className="text-xl flex items-center text-center justify-center lg:justify-start lg:text-start space-x-3 border border-white px-5 py-4 rounded-xl hover:bg-white hover:text-black transition-all">
              <ArrowRight className="hidden lg:block" />{" "}
              <span>
                Competitive Pay :  <br className="lg:hidden" />
                <span className=" font-semibold tracking-wide ">
                  $10 - $18 per hour
                </span>
              </span>
            </h2>
            <h2 className=" text-xl flex items-center text-center justify-center lg:justify-start lg:text-start space-x-3 border border-white px-5 py-4 rounded-xl hover:bg-white hover:text-black transition-all">
              <ArrowRight className="hidden lg:block" />{" "}
              <span>
                Work Schedule :  <br className="lg:hidden" />
                <span className=" font-semibold tracking-wide ">
                  40 hours per week
                </span>
              </span>
            </h2>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl  font-semibold lg:text-start text-center">
              Entry Requirements <br className="lg:hidden" />
              <span className="font-normal lg:text-lg text-base text-blueLight ">
                ( Candidates must meet one of the following criteria )
              </span>
            </h2>
            <ul className="mt-5 pl-4 space-y-2 tracking-wide">
              <li className="list-disc  text-lg ">
                <span className="font-semibold ">Recent Graduates:</span>
                 Bachelor’s degree in Hospitality, completed within the last 12
                months.
              </li>
              <li className="list-disc  text-lg">
                <span className="font-semibold ">Current Students:</span>
                 Actively pursuing a bachelor’s degree in Hospitality.
              </li>
              <li className="list-disc  text-lg">
                <span className="font-semibold ">Experienced Graduates:</span>{" "}
                Bachelor’s degree in Hospitality (completed over 12 months ago)
                with at least 1 year of relevant experience.
              </li>
              <li className="list-disc  text-lg">
                <span className="font-semibold ">Industry Experts: </span>
                Over 5 years of hands-on experience in the hospitality sector.
              </li>
            </ul>
          </div>

          <hr className="mt-12" />

          <div className="mt-12 justify-center lg:text-start text-center items-center flex flex-col">
            <h2 className="text-lg tracking-wide mb-3">
              Apply now and drift into your next career chapter
            </h2>
            <a
              href="mailto:careers@drftglobal.com"
              className="text-xl py-4 px-8 rounded-xl  border border-orangeLight  font-medium hover:bg-orangeLight hover:text-black transition-all"
            >
              Send us your CV to{" "}
              <span className="font-semibold">careers@drftglobal.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
