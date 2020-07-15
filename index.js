
const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
console.log(distanceMsg);
const currentText = document.querySelector('[gps-entity-place]').textContent;
document.querySelector('[gps-entity-place]').setAttribute('value', currentText + ' +' + distanceMsg);