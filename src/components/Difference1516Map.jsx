import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CorruptionMap.css";
const Difference1516Map = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const difference = country.properties.difference;
    const rol = country.properties.rol;
    const coc = country.properties.coc;
    const ge = country.properties.ge;
    const ranking = country.properties.ranking;
    layer.bindPopup(
      `${name} - ${ranking.toFixed(2)}% <br />  Difference = ${difference.toFixed(2)}`
    );
  };

  return (
    <Map style={{ height: "80vh" }} zoom={2} center={[20, 60]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default Difference1516Map;
