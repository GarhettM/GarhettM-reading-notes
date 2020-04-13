'use strict'

//Arrays: containers for values
//        Values are stored in the array at : index
var arr = ['a', 'b', 'c'];
arr[0] === 'a';//a lives at 0
arr[1] === 'b';//b lives at 1

//Objects: containers for values
//          values are stored in named keys

var iceCreamStore = {name : 'cold stone' , key : 'value' , property : 'other value'};
console.log(arr);
console.log(iceCreamStore);

// Accessing properties
// Access the object iceCreamStore at the key 'name'
//you have to put quotes around the property in brackets like ['name'] in order to access it

console.log('Print name : ' , iceCreamStore['name']);

// Dot notation allows you to access properties inside an object by using this example icecreamstore.property or .name

console.log('print this out : ' , iceCreamStore.key);

var ice = {
  name : 'store1',
  cust : 9000,
  isopen : true,
  flavors : ['cookie' , 'oreo' , 'mint'],
  owner : {
    name :'Garhett',
    'coolness' : 1000 ,
    student : true ,
    favSports : ['football' , 'baseball' , 'soccer']
  }
}

console.log('Sports index : ' , ice.owner.favSports[1])

// A method is a functioon that livesd insidfe a function

// Addidng properties outside of objects...

var student = {
  name : 'bade'
}

student['birthday'] = 'april 9';
student.hometown = 'denver';
student.sayHi = function() {
  console.log('hey im ' + this.name + 'i am from' + this.hometown);
}

student.sayHi();

//DOMAIN MODELING
//idea of taking a real world problem and planning / turning it into code
//interface for my ice cream app that shows all the flavors
//all the flavors, name of the store, cost, size, color, etc.
//show the ice cream- images, menu, list: where each item in the ul has a block, is colored, maybe has an image, shows details

//Object literals
var vanilla = {
  'flavor' : 'vanilla',
  cost: 2,
  color: 'white',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'
};

var oreo = {
  flavor : 'oreo',
  cost : 20,
  color: 'blue',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'
};

var mintchip = {
  flavor : mintchip
}

//DOM Manipulation

// taking js and using it to change what is appearing on the webpage

//1. Need a target
//2. Creat content
//3. add the content to the target

//document.write('hello world')

//1 Need target
      //having a targetable element
      //refering to it in the js with document.getElementByID

var h1Target = document.getElementById('pageTitle');

//2 Get content

var newText = 'Welcome to DOM Manipulation';

//3 Add content to the target

h1Target.textContent = newText;

//create list of numbers (9 -25)

//1 targetable element
var orderedListEl = document.getElementById('random');
console.log(orderedListEl);

//2 create conten


//RENDER TO PAGE


//3 append to target

vanilla.renderToPage = function() {
  //1 find target
  var targetUlEl = document.getElementById('ice-Cream');
  //2 create target
    //a li
     var newLiEl = document.createElement('')
    //b text then image
    var liText = 'Flavor : ' + this.flavor...
        //i. img src
 
}