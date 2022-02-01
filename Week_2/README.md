## Class 2 - Part 1
### Feb 1st 10:25-11:40am

* Recap : How to submit your assignment
  1. Upload the code on github
  2. Have a working link available on github. Add that link in your documentation
  3. Have your documentation available on github as a markdown file.  

* Go over application critique 
* Here are a few themes I saw appearing again and again
  * low barrier to entry - is it easy to get started? Is the intent clear? How is the UX and UI
  * clear use case - does the audience know their role in the applications 
  * work within digital limitations - how can we provide a "real" experience
  * ease of sharing

* Go over webpage Homework

* What are we doing this week? - let's look at some examples
  * Learning to make interactions using javascript
    * [Example of carousel - Bus Bunching](https://interactive.wbez.org/curiouscity/bus-bunching/)
    * [Examples of scroll website - Deep Sea](https://neal.fun/deep-sea/)
    * [http://histography.io/](http://histography.io/) 

* The DOM and javascript!
* What is the DOM
  *  Document Object Model - [MDN on DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
  *  It is the data representation of the structure of a document on the web
  *  It is useful as it helps us interact with and manipulate the web using javascript
  *  Let's look at how we can access it from the browser

* But for that, first we need to use javascript!
  * Javascript - language of the web
  * Used for interactions
  * Those of you who have done p5 - p5 is nothing but a js library
  * A few things about js to note
    * it is a scripting language (unlike HTML and CSS)
    * js is a loosely typed language
    * it can be used for front and back end
    * Until recently it could only be run on the web, but now it can be run standalone
    * It is an interpreted language
  * TO DO : Create variables in javascript. Try working with/ adding strings and numbers in the console
  * TO DO : create a js file, include it in our html page

* Now we can access the DOM and try manipulating it from within the browser
  * access the DOM object - `document`
  * It has various attributes and methods eg - `document.body`, `document.body.clientHeight`, `document.getElementById('')`
  * lets try to change the NYT headlines - 
  ```
  document.getElementsByClassName('css-nic7nv ee0hn7b0')[0].innerHTML = "NYUAD REOPENS NEXT WEEK"
  ```
  * TO DO : change multiple headlines using a for loop

* IF time permits
  * Go over events and create a js file in our webpage


**Resources**
* MDN - Javascript Basics
* MDN - A Re-Introduction to JS
* “JS for Cats” by Max Ogden
* ITP Live Web Class - JS 101 by Shawn Van Every

**Assignment**
*We will go over it in Thursdays class*
* READ Scott Murray’s “Ch.3 Technology Fundamentals - Part 2” pp. 35-45
* READ [Steve Krug’s “Don’t Make Me Think” Ch. 1-5](https://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph005548194&context=L&vid=NYUAD&lang=en_US&search_scope=all&adaptor=Local%20Search%20Engine&isFrbr=true&tab=all&query=any,contains,don%27t%20make%20me%20think&sortby=date&facet=frbrgroupid,include,1146206081&mode=basic&offset=0) 
* READ MDN Manipulating Documents (No need to do the exercises, just read through it.)
* READ MDN Introduction to Events (Up to “Other Event Concepts”. You’re welcome to read on, but you can stop when you get to this part.)
* MAKE a **meaningful** webpage (or part of a larger web application) that has at least two event-driven user interactions that are handled in a script.js file. Examples of events include mouse clicks, key presses, window scrolls and many others (window onload does not count). Here are some possible examples (counter, FAQ accordian, 1 week calendar, to do list, image carousel, chat interaction) Your submission should include a .html file, a .css file and a .js file.
* DOCUMENT  your progress and learnings from the making of the webpage
