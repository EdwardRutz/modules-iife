"use strict"
console.log("export-pattern.js active");

/*********** Export Pattern **************/

// var spMod = (function(){ 
//   var exports = {
//     Cartman: 5,
//     Stan: 6,
//     Kyle: 4
//   };
  
//   exports.chef = function() {
//     console.log("Hello Chef!");
//   };
  
//   exports.goodbye = function() {
//     console.log("Screw you guys, I'm going home!");
//   };
  
//   return exports
  
// })();

/*********** Export Pattern - Loose Augmentation **************/
//referenced varialbe in scope (exports), 

var spMod = (function(exports){ //vars assigned to object if empty file or to spMod
  var exports = {
    Cartman: 5,
    Stan: 6,
    Kyle: 4
  };
  
  exports.chef = function() {
    console.log("Hello Chef!");
  };
  
  exports.goodbye = function() {
    console.log("Screw you guys, I'm going home!");
  };
  
  return exports
  
})(spMod || {}); //if spMod exists then import it. Otherwise spMod is an object.


/***********  SCRIPT  ***************/
//return as a public api to make it more clear
 
 // var = public_api {
    
 //  };

 //  return public_api;

/***********  SCRIPT  ***************/


