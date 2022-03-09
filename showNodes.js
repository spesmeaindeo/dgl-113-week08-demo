"use strict";
/* eslint-disable no-console */
/** Date:  2019-02-09
 * Last Update: 2021-02-20
 * Purpose: show DOM Tree structure of a html page, including the empty text nodes
 * This is a recursive version of showNodes of any given element in a html page
 * blockquotes are added to show the parent-children structure
 * You can simply pass in any element reference to show the DOM Tree structure for
 * that portion of the page.
 */
/*
element = (element == null ? document : element); 
let str = showNodes(element);
//show the string in browser console. would be a little massy due to the blockquote
console.log(str);
// appending and displaying the DOM Tree string in the page body
document.body.innerHTML += str;
*/
// keep the original content so that the dynamically added code will not be accumulated in the subsequent clicks.
const originalBody = document.body.innerHTML;
// This function extracts the node info, its attributes, and childNodes into a string
function showNodes(node = document) {
  // clear the dynamically added code from the DOM tree.
  document.body.innerHTML = originalBody;
  // calls a recursive function to extract the info of that portion of the page.
  document.body.innerHTML += getNodeTree(node);
}
/**
 * a recursive function that returns a string with the attribute and child nodes info
 * @param {*} node 
 */
function getNodeTree(node){
  let str = "";
  if (node) {
    // str +=  "<br>\n"; //<br> is for webpage display, \n is for console display
    str +=
      `name: ${node.nodeName}; type: ${node.nodeType}; value: ${node.nodeValue};`;
    const attribs = node.attributes;
    // some nodes have attributes but no value and its length could be 0
    if (attribs != undefined && attribs.length > 0) {
      /*attributes doesn't return an array but a string of key-value pairs.
        So, forEach doesn't work but index notation still works.
        https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes 
        */
      /* attribs.forEach (element => {
          console.log(element.name + " " + element.value);
        });
        */
      str += "; attribs: ";
      for (let i = 0; i < attribs.length; i++) {
        str += `type: ${attribs[i].nodeType}; ${attribs[i].name}: ${attribs[i].value}; `;
      }
    }
    // show child nodes with block indentation
    const nodes = node.childNodes;
    if (nodes) {
      str += "<blockquote>\t";
      nodes.forEach(element => {
        // make a recursive call of showNodes() function to drill down
        str += getNodeTree(element);
      });
      str += "</blockquote>";
    }
  }
  return str;
}
