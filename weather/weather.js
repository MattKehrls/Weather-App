const request = require('request'); //to make http requests

var getWeather = (lat,lon, callback) => {
    // console.log("Lat:"+ lat + "Long:" + lon)
    request({
        url: `https://api.darksky.net/forecast/67d9ebe24dcfbea87c60a2fe6cfadec5/${lat},${lon}`,
        json: true
    },(error,response,body) => {
        // console.log(`Error: ${error}`);
        // console.log(`Status Code: ${response.statusCode}`);
        // console.log(`Body: ${JSON.stringify(body)}`);
        if(!error && response.statusCode === 200) {
           callback(undefined, body.currently);
        } else{
            callback("Unable to fetch weather!");
        }               
    });
}

var ctoF = (temp) => {
    var result = (temp - 32)/1.8;
    return result;
}


module.exports = {
    getWeather,
    ctoF
};