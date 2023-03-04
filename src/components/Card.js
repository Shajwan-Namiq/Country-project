import React from "react";

export default function Card({ name, flags, region, capital }) {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <div className="relative">
          <img
            className="rounded-t-lg h-44 w-full object-cover"
            src={flags.png}
            alt="flags"
          />{" "}
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-gray-800 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-slate-700 transition duration-500 ease-in-out">
              {region}
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto bg-slate-100">
          <h1 className="font-medium text-lg transition duration-500 ease-in-out inline-block mb-2">
            {name.common}
          </h1>
          {/* <p className="text-gray-500 text-sm">Capital :  </p> */}
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-200">
          <span
            href="#"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <span className="ml-1"> Capital</span>
          </span>

          <span
            href="#"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <span className="ml-1"> {capital}</span>
          </span>
        </div>
      </div>
    </>
  );
}
