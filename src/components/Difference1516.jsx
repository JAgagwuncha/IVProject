import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Difference1516Map from "./Difference1516Map";
import LoadCountriesDifferenceTask1516 from "../tasks/LoadCountriesDifferenceTask1516";
import DifferenceLegendItem from "../entities/DifferenceLegendItem"
import legendItems from "../entities/DifferenceLegendItems"
import Legend from "./Legend";

const Difference1516 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesDifferenceTask1516();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Difference in Corruption Map 2015 - 2016</h1>
          <Difference1516Map countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Difference1516;
