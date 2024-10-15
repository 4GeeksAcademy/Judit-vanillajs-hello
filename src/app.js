/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["El gato", "la abeja", "el jefe", "la matiarca", "el nadador"];
  let action = [
    "concinaba",
    "baila en",
    "saltaba en",
    "viajaba en",
    "gritaba a"
  ];
  let what = ["mis deberes", "la tableta", "el gato", "la muñeca", "el horno"];
  let when = [
    "despues de classe",
    "durante la cena",
    "en la habitacion",
    "cerca del hospital",
    "despues del cine"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
};
