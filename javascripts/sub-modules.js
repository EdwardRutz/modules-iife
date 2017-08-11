"use strict"
console.log("sub-module.js active");

/*********** Sub-Module Pattern **************/
//add the .sub object to the main module
var spMod.sub = (function(exports){ //added .sub
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
  
})(spMod.sub || {}); //added .sub, import spMod.sub or create it as an object