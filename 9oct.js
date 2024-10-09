const d = new Date();
document.getElementById("demo1").innerHTML = d;
const d2 = new Date("2021-03-25")
document.getElementById("demo2").innerHTML = d2.getFullYear();
const d3 = new Date("2021-03-25");
document.getElementById("demo3").innerHTML = d3.getMonth() + 1;
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d4 = new Date("2021-03-25");
let month = months[d4.getMonth()];
document.getElementById("demo4").innerHTML = month;