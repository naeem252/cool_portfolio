
var map;
function initMap() {
    var lat_lng={lat: 23.9200917, lng: 90.2525778};
    map = new google.maps.Map(document.getElementById('map'), {
        center: lat_lng ,
        zoom: 17,
        zoomControl: false
    });
    var contentString = "<div>I love you</div>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: lat_lng,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addEventListener('click', function() {
        infowindow.open(map, marker);
    });
}
AOS.init();
$(document).ready(function () {

});