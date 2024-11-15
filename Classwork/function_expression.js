// const add = function sum(a,b){
//     return a+b;
// }
// const add = function (a,b){   //anonymous fuction because it is without name
//     return a+b;
// }
// console.log(add);
// //console.log(sum(5,3));
// console.log(add(3,5));

var a = 200;
console.log(myfun);
// console.log(cube(3));
var myfun = function(num)
{
    return num **3;
};
//----------------------------------------------------------------------------------------------------//
function printName( func,num){
    for (let i=1;i<=num;i++){
        func();
        
    }
}
printName(20);
let myName =function(){
    console.log("kt");
    
}

printName( myName,20);


//---------------------------
//array: map,filter,reduce,sort,...spread,...rest;
//map=return  on ne array
//cube
var arr=[1,2,3,4];
let newCubeVal=function (num){
    return num **3;
}
console.log(arr.map(newCubeVal));
//--------------------

//filter
var arr=[1,2,3,4];
let myEvenNo=function (num){
    if(num % 2 == 0){
        return true;
    }
    return false;

}
console.log(arr.filter(myEvenNo));

//-------------------------
//reduce
var num=[1,2,3,4];
function myFunc(sum,nextvalue){
    return sum+nextvalue;
}
console.log(num.reduce(myFunc));
var person1={
    name:"KirtanSingla",
    age:20,
};

//--dom
console.log(person1.name);
//person2 object person1 property as a prototype
var person2 = Object.create(person1);
console.log(person2);
console.log(person2.__proto__==person1);
var person3 = Object.create(person2);
// console.log(person3);
console.log(person1.name);



//