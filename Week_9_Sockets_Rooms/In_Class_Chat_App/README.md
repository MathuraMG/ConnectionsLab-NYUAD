CHAT APP - Single Page
----------------------

### SETUP 
* Run `npm install` to load the necessary node packages
* Open two broswer windows both pointing to `localhost:3000`

### NEXT STEPS
* Save a user's name once at the beginning
* Let other user's know when someone is typing


-----
29.03.2022
STEPS:
1) download the folder and start the server
1a) establish socket connection
2) get the input from the user, on click event we get the information (c)
3) using 'emit' function, we send the information to the server (c)
4) on 'chatmessage' getting info in server,  io.sockets.emit('chatmessage') sending infrom to client
5) on 'chatmessage' getting info in client and then displaying all the information on the website

----
1) create a new html page -> landing page (index.html)
2) Take information from landing page -> save it in session storage
3) once info is submitted redirect user to chat.html (this is the chat page we prev built)