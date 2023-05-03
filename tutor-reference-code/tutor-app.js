// DOM = Document Object Model

// Created on page load. Representation of HTML content in a JS Object

// Allows us to manipulate the HTML with JS without refreshing the page or editing the HTML file

// https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg

// getElementByID()
const title = document.getElementById("title");
console.log(title);

// getElementsByClassName()
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// getElementsByTagName()
const liElements = document.getElementsByTagName("li");
console.log(liElements);

// querySelector()
// Grabs the first element that matches the query
const para = document.querySelector("p");
console.log(para);

// querySelectorAll()
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// Styling an Element with JS
title.style.color = "Red";

// Style Multiple Elements with JS
// paragraphs.style.color = "Blue"

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "Brown";
}

// Creating an element in JS and adding it to the DOM

// Store the UL in a variable
const ul = document.querySelector("ul");
console.log(ul);

// Use the createElement() method to create a new list item
const newListItem = document.createElement("li");
console.log(newListItem);

// Add the li to the ul
ul.append(newListItem);
console.log(ul);

// Modify the text of new list item
newListItem.innerText = "New List Item Five";

// Modify / Add attributes to an element
newListItem.setAttribute("id", "itemFive");

// Remove an attribute
newListItem.removeAttribute("id");

// Add a class to an Element
newListItem.classList.add("newClass");

// Remove a class from an Element
newListItem.classList.remove("newClass");

// Remove an Element from the DOM
newListItem.remove();

// Traversing the DOM

// Parent Node Traversal

// Remember all elements are nodes but not all nodes are elements.
console.log(ul);
console.log(ul.parentElement);
console.log(ul.parentNode);

const htmlElement = document.documentElement;
console.log(htmlElement);
console.log(htmlElement.parentElement);
console.log(htmlElement.parentNode);

// Child Node Traversal
console.log(ul.childNodes);

console.log(ul.childNodes[3]);
console.log(ul.firstChild);
console.log(ul.lastChild);

// Select just the elements
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Clone and Element
const itemTwo = ul.children[1];
console.log(itemTwo);

const itemTwoClone = itemTwo.cloneNode(true);

ul.appendChild(itemTwoClone);

// Sibling Traversal 
console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);







