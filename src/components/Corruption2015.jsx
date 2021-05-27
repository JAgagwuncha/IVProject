import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CorruptionMap2015 from "./CorruptionMap2015";
import LoadCountriesTask2015 from "../tasks/LoadCountriesTask2015";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Corruption2016 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask2015();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Corruption Map 2015</h1>
          <CorruptionMap2015 countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Corruption2016;
