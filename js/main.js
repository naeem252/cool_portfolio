
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
$(document).ready(function(){
    var all_div=$('.inside');
    window.onscroll=function (e) {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            all_div.each(function(){
                $(this).addClass('active');
            });
        }

        if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
            all_div.each(function(){
                $(this).removeClass('active');
            });
        }

    }

    var image=document.querySelectorAll('.portfolio_media-image img');
    var image_media_name=document.querySelectorAll('.portfolio_image-name');


    for(let i=0;i<image.length;i++){
        var height=image[i].clientHeight;
        image_media_name[i].style.height=height+'px';
    }



});