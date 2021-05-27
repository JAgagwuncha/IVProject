import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Difference1819Map from "./Difference1819Map";
import LoadCountriesDifferenceTask1819 from "../tasks/LoadCountriesDifferenceTask1819";
import legendItems from "../entities/DifferenceLegendItems"
import Legend from "./Legend";

const Difference1819 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesDifferenceTask1819();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Difference in Corruption Map 2018 - 2019</h1>
          <Difference1819Map countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Difference1819;
