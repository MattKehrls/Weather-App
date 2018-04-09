const yargs = require('yargs'); //to get the input arguements when calling the file

const geocode = require('./geocode/geocode');

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

    geocode.geocodeAddress(argv.address, (errorMessage, results)=> {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(results, undefined, 2));
        }
    });

    // console.log(`Args:  ${argv.address}`);
    // theAddress = JSON.stringify(argv.address);
    


    