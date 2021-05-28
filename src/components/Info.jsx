import React from "react";

const Info = () => {
  return (
    <div>
      <h1>Data Informtion</h1>
      <h2>Basic Information</h2>
      <p>
        The data was collected from World Bank, the factors explored being the
        main factors in the World Governance Index. The link is <a href="https://data.worldbank.org">https://data.worldbank.org</a>.
        The data colleced was based on accounts, research and information gathered over the year. The 
        datasets used each had their respective feature and a a 5 year span of its history.
      </p>
      <h2>Limitations</h2>
      <p>
          Corruption is an interesting thing to measure. The issuses with the orginial dataset being that all 
          the measurements were differentin value, the scale was quite similar however this wasn't useful for the 
          visualisation. To combat this, a perecentile was used.
      </p>
    </div>
  );
};

export default Info;
