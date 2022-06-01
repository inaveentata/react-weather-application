import React from "react";
import "./search.css";
import { FaSearchLocation } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Search = ({ searchPlace, setSearchPlace, weatherData }) => { 
  const {name, region, country} = weatherData
  return (
    <section className="form-section">
      <form className="form">
        <input type="text" value={searchPlace} onChange={(e)=>setSearchPlace(e.target.value)} />
        <FaSearchLocation size={25}/>
      </form>

      <p>
        {" "}
        <MdLocationPin /> {name}, {region}, {country}
      </p>
    </section>
  );
};

export default Search;
