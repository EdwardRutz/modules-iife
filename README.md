# README

## CREATING MODULES
Creating modules using self-executing anonymous functions (IIFE).

### EXERCISES
- Functions vs. IIFE
- Using several functions in an IIFE.
- Export pattern
- Using .sub


### NOTES

- End Closures with ``` ! ``` or ``` + ```
	- Replace closing curly braces with a ``` ! ``` or ``` + ```
	- Useful when concatinating
	
#### Loose Augmentation
	- Takes advantage of JS asynchronous environment
	```
		var spMod = (function(exports){ 
	  
	 	return exports
	})(spMod || {}); //loose augmentation

	```
#### CLOSURE
- Returning an object will allow you to return multiple functions if needed.
- It take a while to understand closure.
- [See TH-Front-End Masters: Closure](https://www.lynda.com/JavaScript-tutorials/Closure-QA/604267/626808-4.html)
[TH-FE Masters: Organizing JavaScript Functionality](https://www.lynda.com/JavaScript-tutorials/Organizing-JavaScript-Functionality/604267-2.html)



### SOURCES
- NSS
- [Treehouse: The Module Pattern](https://teamtreehouse.com/library/the-module-pattern-in-javascript-2)

- Lynda, [Organizing JS Functionality](https://www.lynda.com/JavaScript-tutorials/Organizing-JavaScript-Functionality/604267-2.html)

- [Minification:](http://alistapart.com/article/javascript-minification-part-II">http://alistapart.com/article/javascript-minification-part-II)

- [Using the !, +, -, ~  sign before function:](http://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function">http://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function)

- [Why use the ! sign, instead of the parenthesis in AirBnb’s style guide:](href="https://github.com/airbnb/javascript/issues/44#issuecomment-13063933">https://github.com/airbnb/javascript/issues/44#issuecomment-13063933)
