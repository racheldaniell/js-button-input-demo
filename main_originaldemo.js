
/** 
 * DOM MANIPULATION 
 * */
 const label = document.getElementById("name-label")
 const input = document.getElementById("name-input")
 const button = document.getElementById("name-submit")

 const label2 = document.getElementById("pettype-label")
 const input2 = document.getElementById("pettype-input")
 const button2 = document.getElementById("pettype-submit")
 
 
 let userName;
 
 function updateName() {
   // update the name using the value of the input element
   userName = input.value
   // use the user's name in a window alert using templating
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   window.alert(`WOW! Love that name!: ${userName}!`)
   // change the text content of the label to include the name
   // ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
   label.innerText = `Your pet name is ${userName}. Change it here:`
   // change the text content of the button since we have a name now
   button.innerText = "Change"
 }

  
 let petType;
 
 function updateType() {
   // update the pet type using the value of the input element
   petType = input2.value
   // use the pet type in a window alert using templating
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   window.alert(`WOW!  ${userName} That's a great pet!: ${petType}!`)
   // change the text content of the label to include the name
   // ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
   label2.innerText = `Your pet type is ${petType}. Change it here:`
   // change the text content of the button since we have a name now
   button2.innerText = "Change"
 }

// integrate below with above
// example of full separation of JS and HTML

const btn = document.querySelector('#chgcolor');


function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});