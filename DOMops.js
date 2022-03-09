"use strict";
/* This JS file illustrates
 * 1. DOM queries and adding an element at the end of the child element
 * 2. Adding an element at a particular position
 * 3. Removing an element
 * 4. innerHTML disables evt handlers attached to child elements
 */ 
// get hold of the elements and attach an eventlistener to each
{
  window.onload = countListItems;
  let btnAddDefault = document.querySelectorAll("button")[0];
  let btnAddAnyPos = document.querySelectorAll("button")[1];
  let btnAddInnerHTML = document.querySelectorAll("button")[2];
  let toDoList = document.querySelector("#toDoList");

  btnAddDefault.addEventListener("click", addatDefault);
  btnAddAnyPos.addEventListener("click", addatPosition);
  btnAddInnerHTML.addEventListener("click", addinnerHTML);
  toDoList.addEventListener("click", removeItem);
}
// this function finds and shows the number of items in the to-do-list
function countListItems() {
  var olElement = document.getElementById("toDoList");
  var listItems = olElement.querySelectorAll("li");
  // alert("The ordered list contains " + listItems.length + " items");
  let span = document.querySelector("#section1 p span");
  span.innerHTML = listItems.length;
}

// add a new item to the default (end) of the list
function addatDefault() {
  let node = document.createElement("li");
  node.innerHTML = prompt("Enter a new item");
  let parent = document.querySelector("#section1 ol");
  parent.appendChild(node);
  countListItems();
}
// add a new item to the given position of the list
function addatPosition() {
  let node = document.createElement("li");
  node.innerHTML = prompt("Enter a new item");
  let cnt = document.querySelectorAll("#section1 li").length;
  let pos = Number(prompt(`Please enter the rank of this item 1~${cnt}.`));
  let target = document.querySelectorAll("#section1 li")[pos - 1]; // 0  based
  target.insertAdjacentElement("beforebegin", node);
  countListItems();
}
// Remove the item where the event is occurred
function removeItem(e) {
  let parent = e.target.parentElement;
  parent.removeChild(e.target);
  countListItems();
}

/** add a new item to the end of the list. Afterward, evt handlers attached
 * to elements in #section1 will be disabled.
 */
function addinnerHTML() {
  let htmlStr =
    "<p>Added using innerHTML of section 1. This will affect event handlers on the elements in section 1.</p>";
  let parent = document.querySelector("#section1");
  parent.innerHTML += htmlStr;
  countListItems();
}
