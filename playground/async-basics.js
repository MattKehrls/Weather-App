console.log("Starting app");

setTimeout(() => {
    console.log("Inside of call back");
}, 2000);

setTimeout(() => {
    console.log("second call back");
}, 0);



console.log("Finnishing app");