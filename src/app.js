/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = () => {
  document.querySelector('#my-excusa').innerHTML = generadorExcusas();
  console.log(window)
};

let generadorExcusas = () => {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let whoI = Math.floor(Math.random() * who.length);
  let actionI = Math.floor(Math.random() * action.length);
  let whatI = Math.floor(Math.random() * what.length);
  let whenI = Math.floor(Math.random() * when.length);

  console.log(whoI)
  console.log(actionI)
  console.log(whatI)
  console.log(whenI)

  return who[whoI] + ' ' + action[actionI] + ' ' + what[whatI] + ' ' + when[whenI];

};