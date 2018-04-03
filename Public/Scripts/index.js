// var map = new google.maps.Map(document.getElementById('googlemaps'), { mapTypeId: google.maps.MapTypeId.TERRAIN, zoom: 12 });


//  var address = 'Chino Hills, California, US';

// var map = new google.maps.Map(document.getElementById('googlemaps'), { 
//     mapTypeId: google.maps.MapTypeId.SATELLITE,
//     zoom: 20
// });

// var geocoder = new google.maps.Geocoder();

// geocoder.geocode({
//   'address': address
// }, 
// function(results, status) {
//   if(status == google.maps.GeocoderStatus.OK) {
//       new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: map
//       });
//       map.setCenter(results[0].geometry.location);
//   }
//   else {
//       // Google couldn't geocode this request. Handle appropriately.
//   }
// });


var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          mapTypeId: google.maps.MapTypeId.HYBRID,
          center: {lat: 34.052406, lng:  -118.243711},
          zoom: 15
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Parking found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      initMap()