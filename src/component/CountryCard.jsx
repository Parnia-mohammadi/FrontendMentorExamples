import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import SingleCountry from "./SingleCountry";

function CountryCard({ country: data, setShowSingle }) {
  return (
    <div
      className="bg-gray-700 flex flex-col justify-center items-center rounded-lg shadow-2xl w-1/5"
      onClick={() =>
        setShowSingle((prevSingle) => ({
          ...prevSingle,
          show: true,
          country: data,
        }))
      }
    >
      <img
        src={data.flags.png}
        alt={data.flags.alt}
        title={data.name.common}
        className="w-full h-36 object-cover rounded-t-lg"
      />
      <div className="text-start self-start p-4 *:font-medium *:text-sm">
        <p className="mb-4 font-bold text-xl">{data.name.common}</p>
        <p>
          Population:
          <span className="text-xs font-normal"> {data.population}</span>
        </p>
        <p>
          Region: <span className="text-xs font-normal"> {data.region}</span>
        </p>
        <p>
          Capital:
          <span className="text-xs font-normal"> {data.capital[0]}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
