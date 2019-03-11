
const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiaHVja2xlYmFycnkiLCJhIjoiY2p0NGlqNndrMTNyNTQ0bHZ2OXZqaWdscyJ9.60S5TDH8fTShLJI0fRoGfQ';

// module.exports = mapboxgl;


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);



  const marker = buildMarker("hotels", [-74.009151, 40.705086], mapboxgl, map); // or [-87.6354, 41.8885]