const request = require('request'); //to make http requests
const yargs = require('yargs'); //to get the input arguements when calling the file

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help() 
    .alias('help', 'h')
    .argv;

    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            var lat = results.latitude.toFixed(4);
            var lon = results.longitute.toFixed(4);
            // console.log(JSON.stringify(results, undefined, 2));
            console.log("--------RESULTS FOR:--------");
            console.log(results.address)
            // console.log(results.latitude)
            // console.log(results.longitute)
            weather.getWeather(lat, lon, (error, results) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log("--------Weather--------");
                    console.log(`${results.summary} | ${Math.ceil(weather.ctoF(results.temperature))}\u00B0`);
                    // console.log(`Feels Like: ${Math.ceil(weather.ctoF(results.apparentTemperature))}\u00B0`);
                }
            });
        }
    });

   


    // console.log(`Args:  ${argv.address}`);
    // theAddress = JSON.stringify(argv.address);
    


    