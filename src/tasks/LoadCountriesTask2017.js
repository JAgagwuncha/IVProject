import papa from "papaparse";
import legendItems from "../entities/LegendItems";
import { features } from "../data/countries.json";
import IVFinalDataSet from "../data/IVFinalDataSet.csv"
//    this.setState(features);

class LoadCountryTask {
  dataPath = IVFinalDataSet;

  setState = null;

  load = (setState) => { 
    this.setState = setState;

    papa.parse(this.dataPath, {
      download: true,
      header: true,
      complete: (result) => this.#processIVData(result.data),
    });
  };

  #processIVData = (corruptionCountries) => {
    for (let i = 0; i < features.length; i++) {
      const country = features[i];
      console.log('here');
      console.log(country);
      const corruptionCountry = corruptionCountries.find(
        (corruptionCountry) => country.properties.ISO_A3 === corruptionCountry.CountryCode 
      );

      country.properties.rol = 0;
      country.properties.coc = 0;
      country.properties.ge = 0;
      country.properties.ranking = 0;
      country.properties.CountryCode = 0;

      if (corruptionCountry != null) {
        let rol = Number(corruptionCountry.ROL2017);
        let coc = Number(corruptionCountry.COC2017)
        let ge = Number(corruptionCountry.GE2017)
        let ranking = Number(corruptionCountry.Rank2017)
        country.properties.rol = rol;
        country.properties.coc = coc;
        country.properties.ge = ge;
        country.properties.ranking = ranking;
      }
      this.#setCountryColor(country);
    }

    this.setState(features);
  };

  #setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.ranking)
    );

    if (legendItem != null) country.properties.color = legendItem.color;
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountryTask;
