import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Difference1718Map from "./Difference1718Map";
import LoadCountriesDifferenceTask1718 from "../tasks/LoadCountriesDifferenceTask1718";
import legendItems from "../entities/DifferenceLegendItems"
import Legend from "./Legend";

const Difference1718 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesDifferenceTask1718();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Difference in Corruption Map 2017 - 2018</h1>
          <Difference1718Map countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Difference1718;
