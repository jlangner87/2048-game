# 2048 Puzzle

## Date: 7/8/2022

---

### By: Joshua Langner

---

| [LinkedIn](https://www.linkedin.com/in/josh-langner-48) | [GitHub](https://github.com/jlangner87) |

---

### **_Description_**

#### This is a browser game written in JavaScript, CSS, and HTML. Users move numbered blocks around a playing grid- up, down, left, and right. When two blocks with the same number touch, they combine into one block and display the sum of the two numbers. Each move adds one more numbered block to the grid. When the user's blocks total 2048, they win. If they can make no more moves, they lose.

## **_Notes_**

#### When attempting to create a lose function that checks whether all indexes in the grid array, I kept getting an overflow error on the last click. Instead, the lose conditions are now set on the browswer producing an alert when a console error is triggered. Logically, it works, but I am sure this is not a best practice.

## **_Trello Board_**

| [Trello] https://trello.com/b/TnGyK7lh/browser-game-tbd |

### **_Technologies Used_**

- JavaScript
- CSS
- HTML

---

## **_Screenshots_**

### Sample Game Board

![Game_Board](screenshot.png)

### HOW-TO

![How_To](how-to.png)

---

#### _Credits_

drawBoard and populateBoard functions are based on logic from [Video](https://youtu.be/aDn2g8XfSMc)

.every Array method learned at [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

.includes Array method learned at [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

window.onerror learned from [dotherightthing](https://gist.github.com/dotherightthing/cf0966bffc88abfec7af)

keydown event listenr learned from [Eloquent_JavaScript](https://eloquentjavascript.net/15_event.html)

---
