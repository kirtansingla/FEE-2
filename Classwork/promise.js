//promises  represent a future events. Technically  they are object. By default promises
//are in pending states.Promise state .pending , fullfilled , reject:

//1. how to create Promises!!:
// let p = new Promise((resolve,reject)=>{
// let like = false;
//     setTimeout(() =>{
//         if(like){
//         resolve("Yeah she like's you");
//  } else{
//     reject("Naah! you ugly");
//  }
//  },2000);

// });
// console.log(p);


//1.2.1  consuming promises
// p.then((value)=>{
// console.log(value);
// }),
// (err)=>{
//     console.log("rejected");
// };

// p.then((value)=>{
//     console.l(value);
//     }).catch((err)=>{
//         console.log("rejected"+err);
    
//     });


//2. promise chaning:

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolve is working");
    },2000);
});
p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Promise 2 working");
        },2000);
    });
    return p2;
}).then((value)=>{
    console.log("work Done!!");
})
.then((value)=>{
    console.log("ok Now Done");
});

//--------------------------------------------

// function burgerlekarAao(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let dukaanKhuliHai = true;

//             if(dukaanKhuliHai){
//                 resolve("Dukaan Khuli Hai");
//             }else{
//                 reject("Dukaan band hn.");
//             }
//         },2000);
//     });
// }

// burgerlekarAao()
// .then((value)=>{
//     console.log(value);
// })
// .catch((err)=>{
//     console.log(err);
// });

//create a function with name downloadMovie which has a url a argument. Create a promise if url
//is not mp4-->reject else mp4 ---> resolve:

// function downloadMovie(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let  url = "https://www.youtube.com/watch?v=9bZkp7q19.mp3";
//             if(url.endsWith('.mp4')){
//                 resolve("The given url is mp4");
//             }
//             else{
//                 reject("The given url is not mp4");
//             }
//         },2000);
//     });
// };
// downloadMovie()
// .then((value)=>{
//     console.log(value);
// })
// .catch((err)=>{
//     console.log(err);
// });