## Class 2 - Part 1
### Sept 6th - 9:55am - 11:10am

* Recap : How to submit your assignment
  1. Upload the code on github
  2. Have a working link available on github. Add that link in your documentation
  3. Have your documentation available on github as a markdown file.  

* Go over webpage Homework - https://wheelofnames.com/

* A few things we missed last week
  * Flexbox - can you add it to one of your website elements?
  * Look at the Developer Tools
    * You can open the developer tools on Chrome using the shortcut: Command + Option + J (Mac) or Control + Shift + J (Windows, Linux, Chrome OS)
    * Here, you can look at the HTML under "Elements"
    * Errors and messages can be found under "Console"
    * The console can also be used to write and tst javascript code (more on this in the next class)

* What are we doing on Thursday? - let's look at some examples
  * Learning to make interactions using javascript
    * [Example of carousel - Bus Bunching](https://interactive.wbez.org/curiouscity/bus-bunching/)
    * [Examples of scroll website - Deep Sea](https://neal.fun/deep-sea/)
    * [http://histography.io/](http://histography.io/)

## Class 2 - Part 2
### Sept 8th - 9:55am - 12:40am

* Media queries - how can we make our website responsive
  * TODO : open up your code from last week, let's make one element on it responsive

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

💻🔹 **[CODE - JS](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/JS/)**

* Now we can access the DOM and try manipulating it from within the browser
  * access the DOM object - `document`
  * It has various attributes and methods eg - `document.body`, `document.body.clientHeight`, `document.getElementById('')`
  * lets try to change the NYT headlines -
  ```
  document.getElementsByClassName('css-nic7nv ee0hn7b0')[0].innerHTML = "NYUAD REOPENS NEXT WEEK"
  ```
  * TO DO : change multiple headlines using a for loop

* Creating a js file in our page and link it to our HTML  

* EVENTS!
  * onload event
  * click event
  * callbacks!

* Let's make a counter - here's the steps we'll go over
  * Add a button - HTML and event listener
  * Use flex
  * Maybe responsive too
  * Grab a google font

💻🔹 **[CODE - Counter](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/Events/)**

* Let's make a TO Do list
  * add an input box where you can enter the new item
  * add a `change` event listener to the box
  * When the user hits enter after typing in the item, create a list item with the action
  * add a button assiciated to each list item that helps scratch off the item

💻🔹 **[CODE - To Do list](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/Events_To_Do_List/)**

* Demo the scroll example

💻🔹 **[CODE - Events_Scroll](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/Events_Scroll/)**

* using Es6 syntax for functions
* Go over the homework and example interactions!

💻🔹 **[CODE - Events Arrays Images](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/Events_arrays_images/)**

💻🔹 **[CODE - Events Arrays Text](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/Events_arrays_text/)**

💻🔹 **[CODE - Events Colour](https://mathuramg.com/ConnectionsLab-NYUAD/Week_2_JS_Events/Events_color/)**

💻🔴 **[CODE - In Class Counter](https://github.com/MathuraMG/ConnectionsLab-NYUAD/tree/master/Week_2_JS_Events/In_Class_Counter)**

💻🔴 **[CODE - In Class To Do List](https://github.com/MathuraMG/ConnectionsLab-NYUAD/tree/master/Week_2_JS_Events/In_Class_To_Do_List)**


**Resources**
* [MDN - Javascript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [MDN - A Re-Introduction to JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [“JS for Cats” by Max Ogden](about:blank)
* [ITP Live Web Class - JS 101 by Shawn Van Every](https://itp.nyu.edu/~sve204/liveweb_fall2019/javascript101.html)

## **Assignment**
* READ [Steve Krug’s “Don’t Make Me Think” Ch. 1-5](https://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph005548194&context=L&vid=NYUAD&lang=en_US&search_scope=all&adaptor=Local%20Search%20Engine&isFrbr=true&tab=all&query=any,contains,don%27t%20make%20me%20think&sortby=date&facet=frbrgroupid,include,1146206081&mode=basic&offset=0)
* READ [MDN Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) (No need to do the exercises, just read through it.)
* READ [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) (Up to “Other Event Concepts”. You’re welcome to read on, but you can stop when you get to this part.)
* MAKE a **meaningful** webpage (or part of a larger web application) that has at least two event-driven user interactions that are handled in a script.js file. Examples of events include mouse clicks, key presses, window scrolls and many others (window onload does not count). Here are some possible examples (counter, FAQ accordian, 1 week calendar, to do list, image carousel, chat interaction) Your submission should include a .html file, a .css file and a .js file.
* DOCUMENT  your progress and learnings from the making of the webpage
