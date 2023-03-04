import React  from "react";

export default function ButtonFilter({ region, handleRegionFilter ,active,setActive}) {
 

  return (
    <>
      <button
        onClick={() => {
          setActive(region);
          handleRegionFilter(region);
        }}
        className={`py-3 rounded-md text-black
        ${active === region ? "bg-red-800 " : "bg-gray-200"} 
        `}
      >
        {region}
      </button>
    </>
  );
}
