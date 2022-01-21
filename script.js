// // Welcome to JAVASCRIPT



// // netsacpe navigator
// // 1995
// // first by brendan eitch => mocha
// // livescript lauched further named as JAVASCRIPT
// // microsoft built jscript

// // js is backward compatible

// // bable helps to modify new version js into old for browsers



// // ------part1 starting----
// // just adding string + num
// let ans = "2"+1;
// console.log(ans); // 21
// ans = 2+"2";
// console.log(ans); // 22 
// ans = "111222"+2+"5556666"; // so we can observe all are working as string concatenation
// console.log(ans);

// // -------part1 done




// // ------part2 starting --------
// ans = "2"-2; //0
// console.log(ans);
// ans = "77"-1;
// console.log(ans); // 76
// ans = 78-"33";
// console.log(ans); // 45
// // so after part1 string act as Number during subtraction
// // -----------part2 done





// // --------part3 starting----------
// ans = "2"*3;
// console.log(ans);
// ans = "222"*"2";
// console.log(ans);

// // inside part3-> string act as numbers 
// // ------------part3 done---------

// // sorting in array
// arr = [,6,-1,77,2,0,111,99]





// // ------------part4 starting-----------
// ans = "222"/"222";
// console.log(ans);
// ans = "444"/"2";
// console.log(ans);
// // same observation as above
// // ----------part4 done---------------







// // -----part5 done--------------------
// // boolean datatype in JAVASCRIPT
// ans = (9>8)
// console.log(ans); // true
// ans = (9<8)
// console.log(ans); // false

// if(-1){
//   console.log("negative act as true");
// }
// if(2){
//   console.log("positive act as true");
// }
// if(0){
//   console.log("0 act as false");
// }
// if(2.777){
//   console.log("2.777 are true");
// }
// if(-2.777){
//   console.log("(-2.777) act true");
// }
// if("justString"){
//   console.log("string more than one len true");
// }
// if(""){
//   console.log("string with zero len false");
// }
// if(undefined){
//   console.log("undefined act as false");
// }
// if(null){
//   console.log("null act as true")
// }
// if(!(null)){
//   console.log("!null act true")
// }
// if(!undefined){
//   console.log("!undefined act true");
// }
// // ------------part5 done------------



// // -----------------part6----------------------------------
// // part6 deals with function in js very important as DRY principle in prgramming so that we can break our complex code into smaller and understandable one see below for more example 


// // declaring a funtion to say hello
// function  sayHello(name){
//   name = "changed_name";
//   console.log("hello!",name);
// }

// sayHello("ashish");

// // observe below carefully as name is changed inside func but not outside
// let name = "mac";
// sayHello(name);
// console.log(name);

// // -----------part6 -------- done


// // -----------part7-------------------
// // comments for understanding code others for future developer

// console.log("hello js double quote");
// console.log('hello js single quote');
// console.log(`hello js template`)



// // variable name rules
// // -> space cannot be used in var name
// // $ _ can be used

// // camelcase is recommended like  firstName 


// // let const BLOCK SCOPE

// // no error
// // var game = "a";
// // var game = "p";
// // console.log(game);

// // // error here
// // var gm = "gm1";
// // let gm = "gm2";

// // // error here
// // let name = 1;
// // let name = 2;


// // ------PART7 done-------------




// // PART 8
// // ABOUT STRING----------------------


// // STRING IN js

// // trim function
// // trim doesnot change string originally same with lowercase, uppercase
// // these return a new string with trimed of old
// let string1 = "   mystring  ";
// let trimed_string1 = string1.trim();
// let upper_string1 = string1.toUpperCase();
// let lower_string1 = string1.toLowerCase();

// // console.log("->trimed",trimed_string1,"upper->",upper_string1,"lower->",lower_string1);


// let str = "helloMyString";

// // //   slice(a,b) a=> starting index from where you want to start removing and b is last index+1 where string must be ends
// // // for eg ashish 0,3 will remove ash since a's index 0 and h's index 3-1
// // str = "ashish";
// // console.log(str.slice(0,3));

// // console.log(str.slice(1)); if second arg is not passed then by default str.length



// // let suppose you want to change any num into string 
// let num = 102;
// console.log(typeof num,num);
// num = num+"";
// console.log(typeof num,num);
// //  second option is String(any num);


// // string into num
// num = +"12";
// console.log(typeof num);
// // second option is Number("12");

// // PART-8 DONE




// // part-9 begins
// // let max_num_in_js = Number.MAX_SAFE_INTEGER;
// // let min_num_in_js = Number.MIN_SAFE_INTEGER;
// // console.log(max_num_in_js,min_num_in_js);


// // if(undefined===undefined){
// //   console.log("undefined is equal to undefined");
// // }
// // let store = null;
// // if(store===null){
// //   console.log("null is equal to null");
// // }
// // if(store===undefined){
// //   console.log("undefined is equal to null");
// // }
// // console.log(typeof undefined,typeof null); // here undefined, object



// // ABOUT ARRAY in js

// // let arr = [7,2,3,4,5];
// // console.log(typeof arr); // object
// // // since typeof array is also object so how to differentiate so for that purpose we can use Array.isArray(arr)
// // if(Array.isArray(arr)){
// //   console.log("given is array");
// // }


// // // for removing element from array from last we use arr.pop() and it also returns that last element which was removed
// // // for removing element from array from beginning we use array.shift() and returns that element that was deleted

// // const stored_from_shifting = arr.shift();
// // console.log(stored_from_shifting)


// // Destructring arrays
// let arr = [1,2,3,4,5,6];
// // a =1 b=2 c=3 d = rest in form of array
// let [a,b,c,...d] = arr;
// console.log(a,b,c,d);

// // filter method in array
// const newArray = arr.filter((x)=>{
//   return x%2!=0;
// })
// console.log(newArray)

// // reduce method in array be careful first para => callback func and second para=> intialisation of accumulator and its value by default is 0;
// const sumArr = arr.reduce((accumulator,curr)=>curr+accumulator);
// console.log(sumArr);



// SORTING IN ARRAYS
// let arr = [1,2,3,55,-3,-99,9999,9];
// console.log(arr);

// // this will sort as strings
// arr.sort()
// console.log(arr);

// // this will sort in increasing order
// arr.sort((a,b)=>a-b);
// console.log(arr);
// // for b-a for descending order 

// const obj = [
//   { name: "MrPaul", salary: 1100 }, {
//     name: "MrJack", salary: 1200
//   },
//   { name: "MrPhenny", salary: 5000 }
// ]

// // if this will find any greater than 1100 it will return that person
// let collector = obj.find((x)=> x.salary>1100);
// console.log(collector);


// // this will ensure whether all has greater than 500 or not if all have then returns true else false
// let check = console.log(obj.every((x)=>x.salary>500))

// similarly some method is like every but here anyone is satifying then true will be returned otherwise false


// ARRAY FILL AND SPLICE methods

// const arr = [1,2];
// // arr.fill takes three parameter let x,y,z x denotes to value through which array to be filled from index y and to z-1 index AND BE CAREFULL IT OVERWRITES OLD VALUES
// arr.fill(9,0,2);
// console.log(arr);


// SPLICE method first para => begining index , second=> no of deletion from first para index and rest para are the values that are inserted from first para index
// let arr = [5,6]
// arr.splice(0,1,1,2,3);
// console.log(arr);


// ITERABLES
// itr are those where we can apply for of loop like array, string

// ARRAY LIKE 
// where we can apply .length and can access using index
// for eg string


// SET in JS order is not sorted as in c++ and it cannot contains duplicate
// let mySet = new Set();
// mySet.add(2);
// mySet.add(4);
// mySet.add(0);
// mySet.add(2);

// if(mySet.has(2)){
//   console.log("2 is present");
// }

// console.log(mySet);
