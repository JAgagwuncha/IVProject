import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CorruptionMap2017 from "./CorruptionMap2017";
import LoadCountriesTask2017 from "../tasks/LoadCountriesTask2017";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Corruption2017 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask2017();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Corruption Map 2017</h1>
          <CorruptionMap2017 countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Corruption2017;
