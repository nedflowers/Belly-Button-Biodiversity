// // Place API cal for spacex
const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));
// d3.json(url).then(data => console.log(data));


// // retrieve first item in array
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0]));

// // retrieve full name
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


// retrieve lat air force base
d3.json(url).then(spaceXResults => {
    result = spaceXResults.map(coords);
      
    function coords(item) {
    return {"latitude": item.location.latitude, "longitude": item.location.longitude};
    }
    console.log(result)
});

// d3.json(url).then(function(spaceXResults){
//     data = spaceXResults.map(({latitude, longitude}) => (latitude, longitude));
//     console.log(data);
// });

// reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// d3.json(url).then(function(spaceXResults){
//     newRay = spaceXResults.map(({latitude, longitude}) => (latitude,longitude));
//     console.log(newRay);
// });

// d3.json(url).spaceXResults.map(function(longitude, latitude){
//     console.log({key:latitude, value:longitude});
// });


// d3.json(url).then(function(spaceXResults){
//     coords = spaceXResults.map.values(spaceXResults.location);
//     console.log(coords);
// });

// d3.json(url).then(spaceXResults => spaceXResults.location.latitude);

