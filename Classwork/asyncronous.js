// CALL-BACK FUNCTIONS


// Javascript is synchronous but works as asynchrnous
// because of WEB API that help javascript to work as an asynchronous programming language



// Asynchronous Behaviour Components

//______________________________________________________ SetTimeout______________________________________________________
// it uses 1) Call Back function and 2) Delay
// CODE :-
// console.log("Image Searching")
// let a = setTimeout( ()=> {
// console.log("Image Rendered");
// }, 2000  // this is delay of 2000ms i.e 2s
// );
// clearTimeout(a)
// console.log("Work Done");

// SUMMARY :- Javascript works on global model which contains 2 stages, Window(console) and SetTime(WebApi)
// in javascript, it will start with console and will print "Image Searching" , then it will go for setTimeout, but as setTimeout is a function of webApi, therefore window will give this info to Webapi and will wait for it to execute the setTimeout function. As console is ideal, hence it will go for the next block of code and it will print the next console and will print "Work Done". Then at last through WebApi, "Image Rendered" is printed





//______________________________________________________Synchronous______________________________________________________
// console.log("Started");
// function myfunc() {
//     console.log("Function is working :)");
// }

// myfunc();
// console.log("Ends");





// ASYNCHRONOUS
// function first() {
//     console.log("this is first function");
// }


// function second(call) {
//     console.log("this is second function");
//     call();                                       // this will call the first function
// }
// second(first);





// EXAMPLE OF clearInterval
let count = 0;
let a = setInterval(()=> {
    count++
    console.log(`Message ${count},Ghar ke niche aaja gedi marn chliye`);

    if(count >=3) {
        clearInterval(a);
        console.log("Execution stopped");
    }
});


