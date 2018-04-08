const request = require('request');
const yargs = require('yargs');

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

    console.log(argv);

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=513%20weber%20st%20n',
    json: true
},(error,response,body) => {
    // console.log("REsponse:" + JSON.stringify(error));
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address} `);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitute:${body.results[0].geometry.location.lng}`);
    
})