function main() {
  window.removeEventListener('load', main);



  var map = L.map('map').setView([42.2796, -83.0085], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVmZnN6dXN6IiwiYSI6ImNpbndlaGFldTE2Z291a20zZmhncnBicm8ifQ.fHmLqBHvnLnxu-3NMAFw-w', {
    attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
    maxZoom: 18,
    //id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiamVmZnN6dXN6IiwiYSI6ImNpbndlaGFldTE2Z291a20zZmhncnBicm8ifQ.fHmLqBHvnLnxu-3NMAFw-w'
  }).addTo(map);

  L.geojsonLayer = L.geoJson.ajax('bikes-multiuse-trails_0.geojson', {
    style: {
      color: 'darkred',
      weight: 2,
      opacity: 0.8
    }
  }).addTo(map);


}

window.addEventListener('load', main);
