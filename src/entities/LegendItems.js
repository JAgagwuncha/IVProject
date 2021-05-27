import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "80% +",
    "#42F113",
    // "#8b0000",
    (cases) => cases >= 80
  ),

  new LegendItem(
    "60% - 80%",
    // "#741f1f",
    "#EAF113",
    (cases) => cases >= 60 && cases < 80
  ),

  new LegendItem(
    "40% - 60%",
    "#F18513",
    (cases) => cases >= 40 && cases < 60
  ),

  new LegendItem(
    "20% - 40%",
    "#db4437",
    (cases) => cases >= 20 && cases < 40,
    "White"
  ),

  new LegendItem(
    ">20%",
    "#741f1f",
    (cases) => cases > 0 && cases < 20,
    "White"
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

/**
 * 7 > 1 million                        #8b0000
 * 6 >= 500 thousand < 1 million        #9e2a2a
 * 5 >= 200 thousand < 500 thousand     #b15555
 * 4 >= 100 thousand  < 200 Thousand    #c57f7f
 * 3 > 50 thousand < 100 thousand       #d8aaaa
 * 2 >= 0 < 50 thousand                 #ebd4d4
 * 1 NO DATA                            #ffffff
 */

/*

#741f1f // Really red
#9c2929 // more red
#c57f7f // red
#d8aaaa //more pink
#ebd4d4 //pink
#ffffff //white
*/
