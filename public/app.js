let map;

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {zoom: 3, center: { lat: 36.737, lng: 119.787 }});
  let marker = new google.maps.Marker({position: { lat: 36.737, lng: 119.787 }, map: map})

  console.log(Object.entries(map))
}
