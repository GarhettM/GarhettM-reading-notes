//pets
//these are the properties that we need for our object
//name, color, medical, appointements, age, play (function with another pet)

var tweak = {
  species : 'dog'
  name : 'Tweak'
  color : 'black'
  medicalAppointments : ['today', 'someday', 'flea stuff'],
  domestic : true,
  age : 6
}

oreo.play = function(pet){
  var resultString = this.name + ' is wrestling with the ' + pet.name;
  if(this.age > pet.age)  {
    resultString = resultString + ', they are winning';
    else {
      resultString += ', they are losing';
    }
  }
}

var ferran = {
  species : 'kittie',
  'name' : 'ferran',
  'color' : 'grey',
  medicalAppointments : ['sharpen claws', 'another day', 'brushing'],
  domestic : true,
  age : 12
}

ferran.play = function(pet){
  var resultString = this.name + ' is wrestling with the ' + pet.name;
  if(this.age > pet.age)  {
    resultString = resultString + ', they are winning';
    else {
      resultString += ', they are losing';
    }
  }
}

Constructor functions job is to make objects. They take in dynamic pieces as parameters and assign them as properties.

//function Pet(){

}

The Capital "P" means its a constructor function

function Pet(species, name, color, appointments, domestic, age){
  var newPet = {} //Empty object is where the function will place all  the new parameters
  newPet.species = species
}

Constructor fucntions have SECRET code at the top! They create a this = {} and a secret return this

Name.prototype.click = function (){
  console.log('clicked " + this.buttons + ' buttons');
}