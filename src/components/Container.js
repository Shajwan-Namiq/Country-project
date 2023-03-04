import React, { useEffect, useState } from "react";
import ButtonFilter from "./Button";
import Card from "./Card";
import Search from "./Search";
 import ClipLoader from "react-spinners/ClipLoader";


export default function Container() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(false);

  const regions = ["All", ...new Set(data.map((item) => item.region))];

  //fetch data from API
  useEffect(() => {
    const loadAPIData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setLoading(true);
      setData(data);
    };

    loadAPIData();
  }, []);

  //handle Change for search bar
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //Apply filtering and searching the data
  const filterData = data.filter(
    (country) =>
      country.region.toLowerCase().includes(category.toLowerCase()) &&
      country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  //category button for regions
  const handleRegionFilter = (region) => {
    if (region === "All") {
      setCategory("");
    } else {
      setCategory(region);
    }
  };


//Loading Fundtion
const Loading =()=>{
  return (
    <>
      <div class="flex h-screen">
        <div class="m-auto">
          <ClipLoader color={"#d90429"} size={200} />
        </div>
      </div>
  </>
  );
}



  return (
    <>
      {loading ? (
        <>
          <div className="bg-slate-900">
            {/* title */}
            <h1 className="text-4xl text-white font-bold text-center pt-10">
              Find your Country
            </h1>
            {/* search data */} 
            <div className="flex justify-center items-center lg:max-w-sm mx-auto py-2 lg:px-0 px-5">
              <Search search={search} handleChange={handleChange} />
            </div>
            {/* category */}
            <div className="grid grid-cols-2 lg:grid-cols-7  gap-4 pt-5 max-w-6xl mx-auto lg:px-0 px-5">
              {regions.map((region) => (
                <ButtonFilter
                  region={region}
                  key={region}
                  handleRegionFilter={handleRegionFilter}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </div>
            {/* show data from card */}
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {filterData.map((item) => {
                  return <Card {...item} key={item.cca3} />;
                })}
              </div>
            </div>
          </div>
          
        </>
      ) : ( 
       <Loading/>
      )}
    </>
  );
}
