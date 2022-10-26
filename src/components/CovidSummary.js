import React, { useState, useEffect } from "react";
// import { WorldMap } from "react-svg-worldmap";

const CovidSummary = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);

  useEffect(() => {
    const getData = async () => {
      const countries = await fetch("https://api.covid19api.com/summary");
      const response = await countries.json();
      setItems(response);
    };

    getData();
  }, []);

  console.log(items.Countries);

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-center">summary</h1>

      {items.Countries &&
        items.Countries.map((item) => (
          <div className="flex mx-[10%]">
            <div className="flex-col">
              <h1>Country Name</h1>
              <h1>{item.Country}</h1>
              <p>Number Of deaths</p>
              <p>{item.TotalDeaths}</p>
            </div>
          </div>
        ))}
      {/* <WorldMap color="red" title="coutries" data={data} /> */}
    </div>
  );
};

export default CovidSummary;
