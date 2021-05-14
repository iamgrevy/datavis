fetch("mj.json")
 .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
});
   var mymap = L.map("mapid").setView([59.958067, 30.296409], 13);

   // загружаем карту (картинку)
   L.tileLayer(
     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmF6ZHZhcG9rYSIsImEiOiJjajRiMjVtZDYwNmlpMzNtbHYxbHRnODlxIn0.4TwFuureDX7u8OnF7eBtLg",
     {
       attribution:
         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: "mapbox/streets-v11",
       tileSize: 512,
       zoomOffset: -1,
     }
   ).addTo(mymap);
   // создаём маркеры и добавляем на карту
   var cafe1 = L.marker([59.958135, 30.297632]).addTo(mymap);
   var cafe2 = L.marker([59.958987, 30.303655]).addTo(mymap);

   // создаём маркер с поп-апом и добавляем на карту
   var palmBeach = L.marker([26.700707, -80.037261]).addTo(mymap);
   palmBeach.bindPopup("It is PALM BEACH!");

   // форматируем данные для polyline
   var storksLocations = jsonData.map(function (stork) {
     // каждый элемент массива превращается в [lat, lng]
     return [stork["location-lat"], stork["location-long"]];
   });

   // рисуем polyline по точкам из storksLocations и добавляем на карту
   var polyline = L.polyline(storksLocations, { color: "red" }).addTo(mymap);
   // фокусируем карту на нашем polyline
   mymap.fitBounds(polyline.getBounds());

   
   polyline.bindPopup("Eudocimus Abel");
