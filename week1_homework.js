//Task 1 — Personal Introduction

//name,age,city variable are declared using 'let'. So, It can be changed if needed.
let name = "Ravneet Kaur";  
let age = 21;  
let city = "Montreal"; 

//Display a personal introduction message in the console

console.log("Hi, my name is " + name + ", I am " + age + " years old and I live in " + city + ".");

//Task 2 — Temperature Advisor

//creating variable temperature.
let temperature=35 ;

//temperature below 0
if (temperature < 0 ){
    console.log("Freezing");
}
//temperature between 0 and 15 
else if(temperature >= 0 && temperature <= 15){
    console.log("Cold");
}
//temperature between 16 and 25
else if(temperature >= 16 && temperature <= 25){
    console.log("Nice Weather");
}
////temperature above 25
else{
    console.log("Hot");
}

//Task 3 — Even or Odd

//creating variable temperature.
let number = 5 ;

//If we get remainder as 0 on dividing by 2 
if(number%2===0){
    console.log("Even")
}
//If we not get remainder as 0 on dividing by 2 
else{
    console.log("Odd")
}
