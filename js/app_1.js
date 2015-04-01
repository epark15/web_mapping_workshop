///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'epark15.a4cf32f3'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZXBhcmsxNSIsImEiOiJmNFcxTkFjIn0.uP4XrflHwiMCm-mW-JXyKQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var datafileToAdd = 'data/parks.geojson';

var featurelayer = l.mapbox.featurelayer().loadUrl(datafileToAdd).addTo(map);

featurelayer.on('ready',function(){
    this.setStyle({
      'color':'#ec008c',
      'fillColor':'#ec008c',
      'weight':4,
      'opacity':.7
    })
    map.fitBounds(featurelayer.getBounds());
})

  


