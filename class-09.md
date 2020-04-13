//Form practice

var shat = document.getElementById('practice')
  console.log(shat)

  // Name of parameter is irrelevant! It just needs to be there!
function chatBox(event) {
  console.log(event)
  //PREVENT DEFAULT IS SUPER IMPORTANTE!! IT STOPS THE REFRESH
  event.preventDefault();

  //entire event
  console.log(event);

  //event target

  console.log(event.target);

//value target
  console.log('Input: ' + event.target.username);

  console.log('Value: ' + event.target.username.value);

  //add eventListener
  chatBox.addEventListener('submit') `submit` is an event triggered by the "submit" of the button. `click` is another one

  for and name NEED to be the same when making a form

`<select></select>` Is the drop down menu in html

CSS > display !none makes invisible
CSS > display !block makes it visible. Can use 