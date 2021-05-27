import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Difference1617Map from "./Difference1617Map";
import LoadCountriesDifferenceTask1617 from "../tasks/LoadCountriesDifferenceTask1617";
import legendItems from "../entities/DifferenceLegendItems"
import Legend from "./Legend";

const Difference1617 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesDifferenceTask1617();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{textAlign:"center"}}>Difference in Corruption Map 2016 - 2017</h1>
          <Difference1617Map countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Difference1617;
