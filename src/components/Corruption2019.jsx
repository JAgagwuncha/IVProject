import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CorruptionMap2019 from "./CorruptionMap2019";
import LoadCountriesTask2019 from "../tasks/LoadCountriesTask2019";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Corruption2019 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask2019();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Corruption Map</h1>
          <CorruptionMap2019 countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Corruption2019;
