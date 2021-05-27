import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CorruptionMap2016 from "./CorruptionMap2016";
import LoadCountriesTask2016 from "../tasks/LoadCountriesTask2016";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Corruption2016 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask2016();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Corruption Map 2016</h1>
          <CorruptionMap2016 countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Corruption2016;
