// apparently geocharts won't let you have dynamic values 
// also, the highest level of resolution you can work at is regions, which isn't good enough
// to work around this, I'm going to try SVGs -- see svg-test.html for current development strategy

var auckland_val;

function startGeochart() {
    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
    google.charts.setOnLoadCallback(drawRegionsMap);
}


var nz_data = [
    ['Country', 'Covid cases'],
    ['NZ-AUK', auckland_val],
    ['NZ-BOP', 50],
    ['NZ-CAN', 300],
    ['NZ-GIS', 200],
    ['NZ-HKB', 100],
    ['NZ-MBH', 50],
    ['NZ-MWT', 120],
    ['NZ-NSN', 50],
    ['NZ-NTL', 100],
    ['NZ-OTA', 50],
    ['NZ-STL', 25],
    ['NZ-TAS', 50],
    ['NZ-TKI', 250],
    ['NZ-WKO', 50],
    ['NZ-WGN', 50],
    ['NZ-WTC', 5],
    ['NZ-CIT', 50],
];


function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable(nz_data);

    var options = {
        region: 'NZ',
        resolution: 'provinces'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}


