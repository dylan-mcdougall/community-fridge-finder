import {Loader} from "./node_modules/@googlemaps/js-api-loader"
import apiKey from "./secrets.js"

const loader = new Loader({
  apiKey: apiKey,
  version: "weekly"
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  const map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
