function SingleCountry({ country: data }) {
  console.log(data);

  return (
    <div className="flex justify-between items-center mt-20 w-full">
      <img
        src={data.flags.png}
        alt={data.flags.alt}
        title={data.name.common}
        className="w-[40%] h-96 object-cover rounded-lg"
      />
      <div className="flex flex-col w-1/2 ">
        <div>
          <p className="mb-4 font-bold text-2xl">{data.name.common}</p>
          <p>
            Native Name:{" "}
            <span className="text-xs font-normal">
              {" "}
              {Object.values(data.name.nativeName)[0].common}
            </span>
          </p>
          <p>
            Population:
            <span className="text-xs font-normal"> {data.population}</span>
          </p>
          <p>
            Region: <span className="text-xs font-normal"> {data.region}</span>
          </p>
          <p>
            Sub Region:{" "}
            <span className="text-xs font-normal"> {data.subregion}</span>
          </p>
          <p>
            Capital:
            <span className="text-xs font-normal"> {data.capital[0]}</span>
          </p>
          <p>
            Top Level Domain:
            <span className="text-xs font-normal"> {data.tld[0]}</span>
          </p>
          <p>
            Currencies:
            <span className="text-xs font-normal">
              {" "}
              {Object.values(data.currencies)[0].name}
            </span>
          </p>
          <p>
            Languages:
            <span className="text-xs font-normal">
              {" "}
              {Object.values(data.languages).join(", ")}
            </span>
          </p>
        </div>
        <p className="mt-10">
          Border Countries:{" "}
          <span className="text-xs font-normal bg-gray-600 p-1.5 shadow-2xl">
            {data.borders.join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SingleCountry;
