var a = document.getElementById("header");
console.log(a);
console.dir(a);
a.style.color="pink";
a.style.backgroundColor="yellow";
a.style.border ="2px solid black";
a.style.padding="10px";

var b = document.getElementsByClassName("item");
console.log(b);

// b[0].style.backgroundColor ="green";
// b[1].style.backgroundColor ="blue";

//another way
for(let lists of b){
    
    lists.style.color="red";
    lists.style.fontweight ="bold";
}
//by tag name
var c = document.getElementsByTagName("h2");
c[0].style.textDecoration="line-through";
c[0].style.backgroundColor="yellow";

//Query Selector
// var d = document.querySelector("#work")
// console.log(d);

// var d = document.querySelector("ul li a");

var d = document.querySelector("li:nth-of-type(1)");
d.style.color ="green";





