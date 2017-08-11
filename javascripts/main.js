"use strict"
console.log("main.js active");

/*********** Regular Function **************/
//Clutters the global namespace

// function southPark(){
// 	console.log("Type 'southPark' to hear Cartman, Stan and Kyle's secret...");
// 	};

// southPark();

/*********** Self-Executing Anonymouse Function **************/
//kept private and not shown in the global namespace
//results in ``` undefined ```

(function(){
	function southPark(){
	console.log("Cartman, Stan and Kyle dare you to get their secret...");
	};

southPark();
})();

/***********  SCRIPT  ***************/


/***********  SCRIPT  ***************/