// grab the first h1 heading in the DOM and "put it in" JS variable "title"
const title = document.querySelector("h1");

// give this grabbed h1 heading a class of "heading"
title.classList.add("heading");

// NOT DOING THIS: grab this h1 heading and give it an id of "title" 
// NOT DOING THIS: title.setAttribute("id", "title");

// change the text of the grabbed h1 heading
title.innerText = "New Text From JS";

// now let's override the styling of the grabbed h1 element
title.style.color = ("green");
title.style.backgroundColor = ("yellow");

// create and then add to the body (must do both) a new unordered list element
const newUL = document.createElement("ul");
document.body.append(newUL);
// create 3 list items and then add them to the body (must do both)
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
document.body.append(li1, li2, li3);
// give our list items a class of "listItems"
li1.classList.add("listItems");
li2.classList.add("listItems");
li3.classList.add("listItems");

// grab all the elements with class ".listItems"
const listItems = document.querySelectorAll(".listItems");
// print out the listItems variable in the browser console
console.log(listItems);
// give style all the grabbed list items
for (let i=0; i<listItems.length; i++){
    listItems[i].style.color = "blue";
    listItems[i].style.backgroundColor = "pink";
}
// add text to each of the grabbed list items
li1.innerText = "Darth Vadar";
li2.innerText = "Luke Skywalker";
li3.innerText = "Obi-Wan Kenobi";

// NOT DOING THIS: now remove elements using JS
// li1.remove();
// li2.remove();
// li3.remove();
// title.remove();