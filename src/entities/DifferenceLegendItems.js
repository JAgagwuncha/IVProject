import DifferenceLegendItem from "./DifferenceLegendItem";

var legendItems = [
  new DifferenceLegendItem(
    "More than 1% Increase",
    "#42F113",
    (cases) => cases > 1
  ),

  new DifferenceLegendItem(
    "Less than 1% Increase",
    "#EAF113",
    (cases) => cases >= 0 && cases <= 1,
    "White"
  ),

  new DifferenceLegendItem(
    "Reduction",
    "#F18513",
    (cases) => cases >= -100 && cases <= 0,
    "White"
  ),

  new DifferenceLegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

