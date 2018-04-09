const request = require('request'); //to make http requests


var geocodeAddress = (address, callback) => {
    var theAddress = encodeURIComponent(address);
    
    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${theAddress}&key=AIzaSyCBNifCO5e2v9Tib0A5DhRUCI77wFzb2Tc`,
            json: true
        },(error,response,body) => {
            // console.log("REsponse:" + JSON.stringify(error));
            // console.log(JSON.stringify(body, undefined, 2));
            // console.log(`Body: ${body.status}`);
            if(error) {
                callback("Unable to connect to Google servers");
            } else if (body.status === 'ZERO_RESULTS') {
                callback("Unable to find that address");
            } else if (body.status === 'OK'){
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitute: body.results[0].geometry.location.lng
                })
                // console.log(`Address: ${body.results[0].formatted_address} `);
                // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
                // console.log(`Longitute:${body.results[0].geometry.location.lng}`);
                // console.log(`Status: ${[JSON.stringify(body.status)]}`);
            }
            
        });
}



module.exports = {
    geocodeAddress
}