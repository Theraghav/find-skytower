

window.onload = function () {
    // async method to get the latlong. showLatLong callback method receives position object containing all details 
    navigator.geolocation.getCurrentPosition(showLatLong);
    getPositionOfAllBuildings();
}


function getPositionOfAllBuildings() {
    // get all the buildings and get their distances from the browser. 
    // all check the visibility flag and log on screen.
    var allBuildings = [...document.querySelectorAll('a-text[gps-entity-place]')];
    document.getElementById('noOfBuildings').innerHTML += allBuildings.length;

    allBuildings.forEach(x => {
        console.log(`${x.getAttribute('value')}: ${x.getAttribute('distancemsg')}: ${x.getAttribute('visible') !== ""}`);
    });

}


function showLatLong(position) {
    document.getElementById('lat').innerHTML += position.coords.latitude;
    document.getElementById('long').innerHTML += position.coords.longitude;
}


/* 
// register a custom event 
AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('gps-entity-place-loaded', (details) => {
            // gps entity place loaded
            console.log('Entity place loaded', details);
        });
    }
});


function onEntityLoaded(details){
    console.log('Entity place loaded', details);
} */