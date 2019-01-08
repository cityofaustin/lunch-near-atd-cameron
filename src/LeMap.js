import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import data from "./data/data.json";
import L from "leaflet";

class LeMap extends Component {
  render() {
    const officeCoords = [30.345116, -97.67837];
    const zoom = 13;

    const mapCss = {
      width: "100%",
      height: "100vh"
    };

    const officeMarker = L.icon({
      iconUrl: require("./img/office.png"),
      iconSize: [50, 50]
    });

    console.log(data);
    return (
      <Map
        center={officeCoords}
        zoom={zoom}
        maxZoom={18}
        style={mapCss}
        className="markercluster-map"
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={officeCoords} icon={officeMarker} />
        <MarkerClusterGroup>
          {data.features.map((location, i) => (
            <Marker
              position={location.geometry.coordinates}
              key={`${i}_marker`}
            >
              <Popup>
                <h3>{location.properties["Name"]}</h3>
                <p>{`${location.properties["Number"]} ${
                  location.properties["Street"]
                }`}</p>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </Map>
    );
  }
}

export default LeMap;
