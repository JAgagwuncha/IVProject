import DifferenceLegendItem from "./DifferenceLegendItem";

var legendItems = [
  new DifferenceLegendItem(
    "Increase",
    "#42F113",
    (cases) => cases === 1,
  ),

  new DifferenceLegendItem(
    "Decrease",
    "#741f1f",
    (cases) => cases === 0,
    "White"
  
  ),

  new DifferenceLegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

