let map = L.map('map').setView([-33.045400, -71.612790],16)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,16);

    var greenIcon = L.icon({
        iconUrl: 'images/centro-de-reciclaje.png',
        iconSize:     [50, 50],
        iconAnchor:   [50, 50], 
    });

    var marker = L.marker(coords, {icon: greenIcon}).addTo(map);
});