## Class Plan
* Houusekeeping - masks, break, attendance
* Reading discussion
* Go over homework - https://tools-unite.com/tools/random-picker-wheel
* Project 1!
* Example Projects
  * [Wiki Listen](http://listen.hatnote.com/)
  * [Social Media Mirror](https://www.media.mit.edu/projects/social-media-mirror/overview/)
  * [f NY was a 100 people](https://www.nytimes.com/interactive/2020/06/11/multimedia/coronavirus-new-york-inequality.html)
  * [Need a reason to celebrate?](https://public.tableau.com/app/profile/awaleczek/viz/MakeoverMonday-Week44-BankHolidays/BankHolidays)
  * [World migration data](https://peoplemov.in/#f_IN)

* JSON

## Recap
* Events

## Class 2 - Class Plan

**Topics Covered**
* Intro to JSON
* Getting data from JSON using Fetch
* Overview of API and the Web
* Building a web application with Data

**ASSIGNMENT EXPECTATIONS**

**JSON**
* What is an object even?! - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
* What is a json file? Why do we need it? (Notes in the slide for this topic)
  * Javascript Object Notation. It is a way to represent data that is human-readable, and easily parse-able by computers. While it is based on Javascript, it is language independent. It can be read by a variety of languages - C, C++ etc.  
* Create a json file for some data - check it using [JSON Lint](https://jsonlint.com/). Here are some rules to follow
  * Object format
  * Key value pair
  * Always use double quotes
  * Cannot leave comments
  * Can find all the rules here - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON 
* **TODO** make a simple dataset
* Sources that we can look at -> https://github.com/dariusk/corpora/tree/master/data | https://github.com/jdorfman/awesome-json-datasets

* DEMO | Can be static files - downloadable/ can query; can also query for dynamic data (people in space)
* Look at the JSON returned by the URL -
 http://api.open-notify.org/astros.json
* Look at how it is used in http://open-notify.org/Open-Notify-API/People-In-Space/


**API**
* What is an API -> Application Program Interface
* There are many types of API (refer to the slides), but we will focus on now is URL as an API (that is URLs that give access to data and resources from a web server)
* Let's break down a URL to see how we can access data!

So now that we understand where we can get this data from - let's get it on our webpage!

**Getting JSON data on our page using Fetch**
_Note: some of you may have use XMLHTTPRequest before, but fetch is considered more modern and so we will be using this_
* Let's do a quick recap of a callback function
* Now let's look at what promises are!
* `fetch` uses promises. Everytime you use fetch, it gives you a promise
* Let's look at the syntax
```
fetch('http://api.open-notify.org/astros.json')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        //do something
        console.log(data.number);
    })
    */
```
* What happens to this syntax if we combine it with the ES6 syntax we looked at last class!
```
   fetch('http://api.open-notify.org/astros.json')
   .then(response => response.json())
   .then(data => {
        //do something
       console.log(data.number);
   })
   .catch(error => {
       console.log("Error!!! : " + error);
   })
 ```
 * Ok, so let's get some data on our page from a JSON file!

**In Class Work**
* Let's have a look at the wikipedia API (eg - http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search= )
* Complete documentation links
  * https://www.mediawiki.org/wiki/API:Main_page
  * https://en.wikipedia.org/w/api.php
  * https://en.wikipedia.org/w/api.php?action=help&modules=opensearch 
* Get it up and running, and have some basic interaction. Eg - ask the user to enter the topic in the text box, get that information, append it to the URL, and get the data

**A quick look at p5**
* Now that you have some data , let's look at ways that you could visualise using a quick canvas library
* Let's add p5 into our html
* How can we draw an ellispe in p5? Can we link it to the data we have?

### **List of APIs**
* https://rapidapi.com/collection/list-of-free-apis
* [Google trends](https://trends.google.com/trends/)
* [People in space](http://api.open-notify.org/astros.json)
* [Wikipedia](http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=)
* [Openweather - the basics are free](https://openweathermap.org/api)
* [PokemonAPI](https://pokeapi.co/)
* [More datasets - Olympics, jeopardy etc](https://domohelp.domo.com/hc/en-us/articles/360043931814-Fun-Sample-DataSets)
* [Space Data](https://api.le-systeme-solaire.net/en/)
* PS - different countries maintain their data sets as well - do check that out! Here's a few
  * https://opendata.cityofnewyork.us/
  * https://data.gov.in/
  * https://addata.gov.ae/ 

**References**

- Edward Tufte - https://www.edwardtufte.com/tufte/
- Jer Thorp released a book called "Living in Data" - https://www.jerthorp.com/ (I haven't read it but would like to, looks good)
- Mortiz Stefaner - https://truth-and-beauty.net/
- Fathom.info - https://medium.com/fathominfo

## Assignment

* READ Chapter 2 - Affordances of the Digital Medium from this book [Janet H Murray: Inventing the Medium : Principles of Interaction Design As a Cultural Practice](https://bobcat.library.nyu.edu/primo-explore/fulldisplay?docid=nyu_aleph003762385&context=L&vid=NYUAD&lang=en_US&search_scope=all&adaptor=Local%20Search%20Engine&tab=all&query=any,contains,Janet%20Murray&sortby=rank&mode=basic)
* READ the [Project #1 brief](https://github.com/MathuraMG/ConnectionsLabSpring22/blob/master/syllabus.md#project-briefs)
* SHARE and DOCUMENT your Project #1 ideas with the class via discord. Be ready to talk about your ideas in class next week.
* MAKE an initial version of your project where data is displayed on the page either on page load or as a result of a user interaction. You are welcome to go further than this and start to incorporate p5, but you should at least have identified a data set that you intend to use and be able to properly display relevant info on the page. 
* DOCUMENT  your progress and learnings from the making of the your initial version of the project
* **Readings are due by class on Tuesday.** 
* **Your project brief needs to be up on discord by 12 noon Feb 14th**
* **Your github needs to be updated with a version/prototype of your project and the documentation by 12 noon Feb 14th**

