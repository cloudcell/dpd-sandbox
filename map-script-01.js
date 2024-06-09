
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample GeoJSON data for the choropleth map
var geojsonData = {
"type": "FeatureCollection",
"features": [
    {
    "type": "Feature",
    "properties": { "name": "Sample Area", "density": 100 },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
        [
            [-104.05, 48.99],
            [-97.22, 48.98],
            [-96.58, 45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]
        ]
    }
    }
]
};

function getColor(d) {
return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
        d > 200  ? '#E31A1C' :
        d > 100  ? '#FC4E2A' :
        d > 50   ? '#FD8D3C' :
        d > 20   ? '#FEB24C' :
        d > 10   ? '#FED976' :
                    '#FFEDA0';
}

function style(feature) {
return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
};
}

L.geoJson(geojsonData, {style: style}).addTo(map);

