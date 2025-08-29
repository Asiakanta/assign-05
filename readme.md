1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: getElementById--selects one element by its unique id.
getElementsByClassName--Selects elements by class name.
querySelector--selects the first element that matches a css selector.
querySelectorAll--selects all elements that matches a css selector.

2. How do you **create and insert a new element into the DOM**?

   Ans: At first,create an element using--document.createElement().
   secondly,add content/attributes using textContent,innerHtml,setAttribute,etc.
   finally,insert into DOM using appendChild,append,prepend,insertBefore,etc.

3. What is **Event Bubbling** and how does it work?

   Ans: Event Bubbling means that when an event occurs in an element ,it first runs the handler ,on that element,then on its parents then on its ancestor elements,up to the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Ans:Event Delegation is a technique where you attach an event listener to a parent element instead of each child. It is useful for handling many children elements efficiently and dealing with dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   Ans: preventDefault() prevents the default behavior of an element .On the other hand,stopPropagation()stops the event from bubbling up or capturing down.
