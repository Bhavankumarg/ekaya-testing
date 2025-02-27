"use client";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import "../components/NotFound/NotFound.css";
export default function Custom404() {
  return (
    <>
      <div className="bg-black h-screen">
        <div>
          <section className="error-container">
            <span className="four mt-40">
              <span className="screen-reader-text">4</span>
            </span>
            <span className="zero">
              <span className="screen-reader-text">0</span>
            </span>
            <span className="four">
              <span className="screen-reader-text">4</span>
            </span>
          </section>
        </div>
        <div>
          <div className="flex flex-col justify-center md:-mt-32 link-container">
            <div>
              <p className="text-center text-7xl font-bold md:-mt-20 -mt-40 p-3 bg-gradient-to-r from-[#d89ca4] to-[#e27b7e] bg-clip-text text-transparent">
                Not Found
              </p>

              <p className="text-center link-container text-3xl mt-10 text-gray-300">
                Go Back To
              </p>
            </div>
            <button className="-mt-10">
              <a
                href="/"
                className="bg-[#e27b7e] text-white text-2xl p-3 more-link"
              >
                Home Page
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
