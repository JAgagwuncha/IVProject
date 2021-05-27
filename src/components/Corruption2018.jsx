import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CorruptionMap2018 from "./CorruptionMap2018";
import LoadCountriesTask2018 from "../tasks/LoadCountriesTask2018";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Corruption2018 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask2018();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Corruption Map 2018</h1>
          <CorruptionMap2018 countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Corruption2018;
