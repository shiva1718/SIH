

let zoomLevel = 19.65;
let map;

const officers = {}
let id = 3;

function initMap() {
    let map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AlcfAk5eTMkn5lHe9akGI64L4JSaIrrFlTyYlt8Ei2HQE7PPSFeJc5R_BVSDmIRC', // Replace with your API key
        center: new Microsoft.Maps.Location(12.9252385,80.1177365), // Initial location
        zoom: zoomLevel // Initial zoom level
    });
    let o1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(12.924963, 80.117577), {
        title: 'Officer1'
    });

    let o2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(12.925466184442435, 80.11795615869858), {
        title: 'Officer2'
    });
    officers['o1'] = o1;
    officers['o2'] = o2;

    map.entities.push(o1);
    map.entities.push(o2);
}


// call this function to add a new officer location in the map.
function addOfficer(lat, lon) {
    let myLoc = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lat, lon), {
        title: 'Additional officer'
    });
    officers.put('o' + id, myLoc);
    map.entities.push(myLoc);
    id++;
}


// initMap();
console.log(officers);
function updateOfficerLocation(id, lat, lon) {
    officers[id].setLocation(new Microsoft.Maps.Location(lat, lon));
}
setTimeout(() => {
    updateOfficerLocation("o1", 12.92519234193817, 80.117856246438);
}, 5000);