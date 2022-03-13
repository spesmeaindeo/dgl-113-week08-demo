/**
 * This JS file is based on the textbook listing 13.5. 
 * It shows how to make a menu (table of content) based on the existing
 * page content. Pay attention to the following:
 * 1. Use DOM query to extract existing items (h2s)
 * 2. Use the extracted data to create a UL and its li items and hyperlinks
 * 3. Mark the targets for navigation
 */
window.addEventListener("load", start);
function start() {
  let button = document.querySelector("button");
  button.addEventListener("click", makeMenu);
}
function makeMenu() {
  
  // get all the H2 heading elements
  var h2s = document.getElementsByTagName("h2");
  // create a new page element for the menu
  var menu = document.createElement("div");
  // create a UL element and append it to the menu div
  var menuUl = document.createElement("ul");
  menu.appendChild(menuUl);

  // cycle through h2 headings loop
  for (var i = 0; i < h2s.length; i++) {
    // get text node of h2 element
    var itemText = h2s[i].childNodes[0].nodeValue;
    // add a list item
    var menuLi = document.createElement("li");
    // add it to the menu list
    menuUl.appendChild(menuLi);
    // the list item contains a link to be clickable
    var menuLiA = document.createElement("a");
    menuLiA = menuLi.appendChild(menuLiA);
    // set the href of the link
    menuLiA.setAttribute("href", "#item" + i);
    // set the text of the link
    var menuText = document.createTextNode(itemText);
    menuLiA.appendChild(menuText);
  
    // create matching anchor element."a" means anchor element
    var anc = document.createElement("a");
    anc.setAttribute("name", "item" + i);
    // add anchor before the heading
    document.body.insertBefore(anc, h2s[i]);
    // other option is h2s[i].setAttribute("id", "item" + i);
  }
  // add menu to the top of the page
  document.body.insertBefore(menu, document.body.firstChild);
}