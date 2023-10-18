/* first JS file! */
/**  DOM MANIPULATION  **/


// 1 - A SIMPLE MESSAGE BUTTON 

// First we need to find/get/grab the related piece in HTML
// declare a const variable to "grab" the html element 
// name it something intuitive in camelCase
// use the methods beginning in document.getElementBy... 

const myClickMsg = document.getElementById("message-btn");

// write a function - something that will happen onClick 
// pay careful attention to syntax/punctuation here 

function myClick() {

  // show a message when user clicks 
  window.alert("Hi! Thanks for clicking me")

}


// 2 - CHANGE THE HTML ON SCREEN USING JS!

// declare and intialize a const variable to grab your HTML button
// declare and initialize a const variable to grab the HTML class/element/id you want to impact
// write a function to change text color
// THEN update HTML to have name of your function on click
// could create another button to undo this or create a radio button selection

// const myColorText = document.getElementById("color-text");

function myColorChange() {
    document.getElementById("color-text").style.color = "magenta";
}

function myColorChange2() {
  document.getElementById("color-text").style.color = "blue";
}

// 3 - MORE COMPLEXITY - 3 PIECES WORKING TOGETHER

// Now add 3 things to work together 
// add 3 CONST variables to hold interactive contennt


 const label = document.getElementById("name-label");
 const input = document.getElementById("name-input");
 const button = document.getElementById("name-submit");


 
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
   // ADDED post-class - clearing out input field
   input.value = ""
 }



 function myStyleChange() {
  document.getElementById("changable-text-02").setAttribute("class", "styled-text-updated");
}

function resetText() {
    document.getElementById("changable-text-02").setAttribute("class", "styled-text");
}


// emerging preferred practice style JavaScript
// example of full separation of JS and HTML

const btn = document.querySelector('#chgcolor');


function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const redCol = `rgb(200,70,20,0.7)`;
  const bluCol = `rgb(2,70,200,0.7)`;
  const grnCol = `rgb(2,170,60,0.7)`;
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});