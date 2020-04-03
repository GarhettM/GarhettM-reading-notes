# Class Notes

function stringToArray(stringParam) {
  var array = [];


  for (var i = 0; i < stringParam.length; i++) {
    array[i] = stringParam[i];
  }

  return array;

  this basically says that the function "stringToArray" is going to have a "word" as a parameter. It also has a var array = []

  the for loop is basically braking "stringParam" into individual strings by assigning i to 0  then stringparam.length identifies the amount of "strings" in the word, followed by incrementing i to continue the loop. The array and word HAVE to equal eachother otherwise the strings wont add up.