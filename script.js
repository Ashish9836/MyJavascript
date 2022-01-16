// Welcome to JAVASCRIPT
// ------part1 starting----
// just adding string + num
let ans = "2"+1;
console.log(ans); // 21
ans = 2+"2";
console.log(ans); // 22 
ans = "111222"+2+"5556666"; // so we can observe all are working as string concatenation
console.log(ans);

// -------part1 done




// ------part2 starting --------
ans = "2"-2; //0
console.log(ans);
ans = "77"-1;
console.log(ans); // 76
ans = 78-"33";
console.log(ans); // 45
// so after part1 string act as Number during subtraction
// -----------part2 done





// --------part3 starting----------
ans = "2"*3;
console.log(ans);
ans = "222"*"2";
console.log(ans);

// inside part3-> string act as numbers 
// ------------part3 done---------




// ------------part4 starting-----------
ans = "222"/"222";
console.log(ans);
ans = "444"/"2";
console.log(ans);
// same observation as above
// ----------part4 done---------------







// -----part5 done--------------------
// boolean datatype in JAVASCRIPT
ans = (9>8)
console.log(ans); // true
ans = (9<8)
console.log(ans); // false

if(-1){
  console.log("negative act as true");
}
if(2){
  console.log("positive act as true");
}
if(0){
  console.log("0 act as false");
}
if(2.777){
  console.log("2.777 are true");
}
if(-2.777){
  console.log("(-2.777) act true");
}
if("justString"){
  console.log("string more than one len true");
}
if(""){
  console.log("string with zero len false");
}
if(undefined){
  console.log("undefined act as false");
}
if(null){
  console.log("null act as true")
}
if(!(null)){
  console.log("!null act true")
}
if(!undefined){
  console.log("!undefined act true");
}
// ------------part5 done------------



// -----------------part6----------------------------------
// part6 deals with function in js very important as DRY principle in prgramming so that we can break our complex code into smaller and understandable one see below for more example 


// declaring a funtion to say hello
function  sayHello(name){
  name = "changed_name";
  console.log("hello!",name);
}

sayHello("ashish");

// observe below carefully as name is changed inside func but not outside
let name = "mac";
sayHello(name);
console.log(name);


