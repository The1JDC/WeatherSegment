var geo = require('geo');
var ForecastIo = require('forecastio');
var address = '5817 N. Spaulding Avenue, Chicago IL 60659';
var forecastIo = new ForecastIo('d548460a36a617cfe55c334b989fb74e');

var glat='';
var glong='';
var DEG_TO_RAD = Math.PI / 180;
var RAD_TO_DEG = 180 / Math.PI;
var TAU = Math.PI * 2;

function radians(deg) {
  return deg * DEG_TO_RAD;
}

function degrees(rad) {
  return rad * RAD_TO_DEG;
}

function sq(val) {
  return val * val;
}

// Replace with destructuring
var sin = Math.sin;
var cos = Math.cos;
var atan2 = Math.atan2;
var sqrt = Math.sqrt;

function courseTo(lat1, long1, lat2, long2) {
  // Ported from TinyGPS
  var dlon = radians(long2 - long1);
  lat1 = radians(lat1);
  lat2 = radians(lat2);
  var a1 = sin(dlon) * cos(lat2);
  var a2 = sin(lat1) * cos(lat2) * cos(dlon);
  a2 = cos(lat1) * sin(lat2) - a2;
  a2 = atan2(a1, a2);
  if (a2 < 0) {
    a2 += TAU;
  }
  return degrees(a2);
}

function cardinal(course) {
  // Ported from TinyGPS
  var directions = [
    "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
    "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
  ];
  var direction = ((course + 11.25) / 22.5) | 0;
  return directions[direction % 16];
}

function distanceBetween(lat1, long1, lat2, long2) {
  // Ported from TinyGPS
  var delta = radians(long1 - long2);
  var sdlong = sin(delta);
  var cdlong = cos(delta);
  lat1 = radians(lat1);
  lat2 = radians(lat2);
  var slat1 = sin(lat1);
  var clat1 = cos(lat1);
  var slat2 = sin(lat2);
  var clat2 = cos(lat2);
  delta = (clat1 * slat2) - (slat1 * clat2 * cdlong);
  delta = sq(delta);
  delta += sq(clat2 * sdlong);
  delta = sqrt(delta);
  var denom = (slat1 * slat2) + (clat1 * clat2 * cdlong);
  delta = atan2(delta, denom);
  return delta * 6372795;
}
//42.01217622910639,"start_longitude":-87.79521497471302,"end_latitude":42.01897594296307,"end_longitude":-87.7972450875283
console.log(cardinal(courseTo('42.01217622910639','-87.79521497471302','42.01897594296307','-87.7972450875283')));

 var strava = new require("strava")
 (
	{
        client_id: "323",   
        client_secret: "2960d7d11de1179f1c065c4d26c3d21718893ba1",
        redirect_uri: "https://98.227.104.63",
        access_token: "7442f33e1b4edd08b8dd1984ad2d21363311bd93"
	}
 );
	strava.athlete.get(function(err, res) 
	{
        console.log(res);
    });
	
/*	
    var sensor = false;
    geo.geocoder(geo.google, address, sensor,
    function(formattedAddress, latitude, longitude, details) 
	{
        console.log("Formatted Address: " + formattedAddress);
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
		glat=latitude;
		glong=longitude;
		forecastIo.forecast(latitude, longitude, function(err, data) 
		//forecastIo.forecast('51.506', '-0.127', function(err, data) 
		{
		  if (err) throw err;
		  console.log(JSON.stringify(data, null, 2));
		});
                    //console.log("Address details:", details);
    });

	
*/	
	
	

	//working
	 //curl -G https://www.strava.com/api/v3/segments/starred  -H "Authorization: Bearer 7442f33e1b4edd08b8dd1984ad2d21363311bd93"
	 
	//7442f33e1b4edd08b8dd1984ad2d21363311bd93 

/*
var forecastIo = new ForecastIo('d548460a36a617cfe55c334b989fb74e');

//forecastIo.forecast('51.506', '-0.127', function(err, data) 
forecastIo.forecast(glat, glong, function(err, data) 
{
  if (err) throw err;
  console.log(JSON.stringify(data, null, 2));
});

*/

	/*
    // Reverse Geocoding also works
    var latlong = { 'latitude': 52.5112, 'longitude': 13.45155};
    geo.geocoder(geo.google, latlong, sensor,
    function(formattedAddress, latitude, longitude, details) {
        console.log("Formatted Address: " + formattedAddress);
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
                    console.log("Address details:", details);
    });
	*/