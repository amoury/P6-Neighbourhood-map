// Step 1 - Initialize the map
var map;


// This Constructor function creates the new map (found on Google docs https://developers.google.com/maps/documentation/javascript/tutorial)
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 25.2711 , lng: 55.3075},
          zoom: 11,
          disableDefaultUI: true
        });
    

// Get the Data from an API
	var count;
	var locations;
	var placesList = $('.places-list');
	var placesObject;
	var placesAPI = "http://tour-pedia.org/api/getPlaces?location=Dubai&category=attraction";

	$.getJSON( placesAPI, function(data) {
		locations = data;		// Array of unlimited objects - Each object contains a place details
		for(count = 0; count < 25; count++) {
			// console.log(locations[count]["name"]);
			placesList.append('<li>' + locations[count]["name"] + '<br><span>' + locations[count]["address"] + '</span></li>');
			setMarkers();
			
		}
	});

	// Function that initializes the Markers (All Marker settings go in here)
	var markersArray = [];

	var setMarkers = function() {
		marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(locations[count]["lat"], locations[count]["lng"]),
			title: locations[count]["name"],
			animation: google.maps.Animation.DROP
		});

		markersArray.push(marker);
	}

	
		
// InfoWindow
	



}  // End of Function init()

