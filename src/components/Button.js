import React  from "react";

export default function ButtonFilter({ region, handleRegionFilter ,active,setActive}) {
 

  return (
    <>
      <button
        onClick={() => {
          setActive(region);
          handleRegionFilter(region);
        }}
        className={`py-3 rounded-md 
        ${active === region ? "bg-red-800 text-black" : "bg-gray-200 text-black"} 
        `}
      >
        {region}
      </button>
    </>
  );
}
