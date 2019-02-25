// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function(window){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Harder portion
  for(var i = 0; i < names.length; i++){
    
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    if(firstLetter == "j")
    {
      byeSpeaker.speak(names[i]);
    } 
    else{
      helloSpeaker.speak(names[i]);
    }
  }

  // use the map function to create an array based on the names array
  var mapFunc = function (name){
    var firstLetter = name.charAt(0).toLowerCase();
      
      if(firstLetter == "j")
      {
        console.log(byeSpeaker.speakSimple(name));
      } 
      else{
        console.log(helloSpeaker.speakSimple(name));
      }
  };
  var new_array = names.map(mapFunc);

  // Code using the reduce function
  var arrays = {hello: [], goodbye: []};
  var myObject = names.reduce(function (accumulator, currentValue) {
    var firstLetter = currentValue.charAt(0).toLowerCase();
    // console.log(firstLetter);
    if(firstLetter == "j")
    {
      arrays.goodbye.push(byeSpeaker.speakSimple(currentValue));
    } 
    else{
      arrays.hello.push(helloSpeaker.speakSimple(currentValue));
    }
    return accumulator
  }, arrays);
  
  // console.log(myObject);

  // print values in the Hello array of the object
  for(var j = 0; j < myObject.hello.length; j++){
    console.log(myObject.hello[j]);
  }
  // print values in the Goodbye array of the object
  for(var j = 0; j < myObject.goodbye.length; j++){
    console.log(myObject.goodbye[j]);
  }

})(window);

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1


// for (/* fill in parts of the 'for' loop to loop over names array */) {

//   // STEP 11:
//   // Retrieve the first letter of the current name in the loop.
//   // Use the string object's 'charAt' function. Since we are looking for
//   // names that start with either upper case or lower case 'J'/'j', call
//   // string object's 'toLowerCase' method on the result so we can compare
//   // to lower case character 'j' afterwards.
//   // Look up these methods on Mozilla Developer Network web site if needed.
//   // var firstLetter =

//   // STEP 12:
//   // Compare the 'firstLetter' retrieved in STEP 11 to lower case
//   // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
//   // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
//   // name in the loop.
//   if (/* fill in condition here */) {
//     // byeSpeaker.xxxx
//   } else {
//     // helloSpeaker.xxxx
//   }
// }