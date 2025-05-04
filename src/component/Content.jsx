import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CountryCard from "./CountryCard";
import SingleCountry from "./SingleCountry";
import { useState } from "react";

function Content() {
  const [showSingle, setShowSingle] = useState({ show: false, country: "" });

  const fetchCountry = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data.slice(0, 8);
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountry,
  });

  return (
    <div className="flex justify-between items-center justify-items-center flex-wrap gap-8 px-24 py-8">
      {showSingle.show ? (
        <SingleCountry country={showSingle.country} />
      ) : (
        data &&
        data.map((c) => (
          <CountryCard
            key={c.name.common}
            country={c}
            setShowSingle={setShowSingle}
          />
        ))
      )}
    </div>
  );
}

export default Content;
