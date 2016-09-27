// Step 1 - Initialize the map

var map;

// This Constructor function creates the new map (found on Google docs https://developers.google.com/maps/documentation/javascript/tutorial)

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 25.2711 , lng: 55.3075},
          zoom: 11,
          disableDefaultUI: true
        });
      }



// Get the Data
var placesObject;

var placesAPI = "http://tour-pedia.org/api/getPlaces?location=Dubai&category=attraction";

// This IIFE requests the data from API

(function(){
	$.getJSON( placesAPI, function() {
		console.log( "success" );
	})
	.done(function(data) {
		var count = 0;
		for(count = 0; count < 10; count++) {
			placesObject = data[count] ;
			placesObject = window.placesObject;

			$('.places-list')
			.append("<li>" + placesObject["name"] + "<br><span>" + placesObject["address"] + "</span></li>");

			console.log(placesObject);


		var markers = [];





		}
	});


})();








