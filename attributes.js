"use strict";
/**
 * this JS file illustrates
 * 1. the use of getAttribute()
 * 2. the use of setAttribute()
 * 3. the use of removeAttribute
 * */
// get hold of all buttons and attach a click eventlistener to each
{
  let btnGetAttrib = document.querySelectorAll("button")[0];
  let btnSetAttrib = document.querySelectorAll("button")[1];
  let btnRemoveAttrib = document.querySelectorAll("button")[2];
  btnGetAttrib.addEventListener("click", getAttribute);
  btnSetAttrib.addEventListener("click", setAttribute);
  btnRemoveAttrib.addEventListener("click", removeAttribute);
}
// get and show the attribute of an element
function getAttribute() {
  let sect1Ol = document.querySelector("section ol"); // get the section1's ol
  let sectOlId = sect1Ol.getAttribute("id");
  sect1Ol.innerHTML += `<li>The ol's id is: ${sectOlId}</li>`;
}

// set the attribute of an element
function setAttribute() {
  let sect1Ol = document.querySelector("section ol"); // get the section1's ol
  sect1Ol.setAttribute("class", "setFont setBackColor");
  // ol.setAttribute("class", "setBackColor"); //this will overwrite the early assignment
}

// if the element has the attribute, remove it.
function removeAttribute() {
  let sect1Ol = document.querySelector("section ol"); // get the section1's ol
  if (sect1Ol.hasAttribute("class")) {
    sect1Ol.removeAttribute("class");
  }
}