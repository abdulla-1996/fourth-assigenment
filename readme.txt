1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
    *getElementById(): It's always select and return single element by its Id and faster.

    *getElementsByClassName(): It,s selects all elements and  and returns a live HTMLCollection.

    *querySelector(): It's very flexible and always select the first element matching a CSS selector.

    *querySelectorAll():It,s selects all elements matching a CSS selector and return a static NodeList.


2. How do you create and insert a new element into the DOM?

Answer: 
      FIrst of all, create a element. Secondly add content or attributes and then append it, means insert it into the DOM.

3. What is Event Bubbling? And how does it work?

Answer:
    Event Bubbling is when an event starts on the target element and then propagates upward through its parent elements. For example if we click in a button then it moves to parent div of it, and then body, html so on. In addition, we can stop it by using event.stopPropagation();

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
    Event Delegation is a technique where we can attach one event listener to a parent element instead of adding listeners to multiple child elements.It,s cleaner and more efficient code.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
    *preventDefault(): It Stops the browser’s default behavior.

    *stopPropagation():It Stops the event from bubbling up the DOM tree.
