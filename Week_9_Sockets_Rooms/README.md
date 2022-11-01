# Week 9 - Class 1

## Class Plan
* Housekeeping - attendance
* Catch up slots - https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUtvSW5ielpDVGRafGRlZmF1bHR8NzRlNTQwOGY4NTQ1ZjZiNDVmMTE4OWI1ZTUxNjc4YjY
* Project Ideas! - Can you update it here? - https://docs.google.com/document/d/1YiS5eqTqVyE4sMuyFe05MLpHR1DjEwDKkfA0znikUs8/edit
* Any questions from last week? Sockets?
* GIT!!!!!
* Build a chat app ?
* Namespaces and rooms (this will be done on Thursday)

## Git
* what is git and github?
* Install git - https://git-scm.com/downloads
* Set up a PAT - If you are able to use HTTPS and prompted to create a PAT (personal access token), here is a helpful guide from the Github Docs - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
* The basic commands
  * `git init`
  * `git add .`
  * `git commit -m "insert a message here"`
  * `git push origin master `
* The got language now uses "main"
  * To do that, after you do `git add .`, say `git branch main`
  * Then you can say `git push origin main`
* How can you collaborate with git?
  * `git pull origin master`
  * then add, commit, and `git push origin master`
* Videos - https://drive.google.com/drive/u/1/folders/1eRLxlV7a5F32ndPLLnRGH0PCiAjBiVP5

## Chat app
* Starter code can be downloaded from here - https://drive.google.com/drive/folders/1buPgAh2pjBLIMX6N4JR97PdinNKknHir?usp=sharing
* Steps we will do together
  * set up the flow of information from client to server and back
  * store that information in the server - share it with new joiners

# Class 2

## Namespaces and rooms
* A Namespace is a communication channel that allows you to split the logic of your application over a single shared connection (also called "multiplexing").
* A room is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of clients
* Namespaces: are managed in the frontend meaning the user, or an attacker, joins through the frontend and the joining and disconnecting is managed here. C -> `let sockets = io.of('/namespace1)`
* Rooms: are managed in the backend, meaning the server assigns joining and leaving rooms. `socket.join(roomName)`

* DEMO Trivia Example - https://glitch.com/edit/#!/ima-cl-21-trivia-app 
  * Input Page -https://ima-cl-21-trivia-app.glitch.me/input
  * Output Page - https://ima-cl-21-trivia-app.glitch.me/output
* DEMO Private Chat Rooms - Github = https://github.com/MathuraMG/IMA-Low-Res-Connections-Lab/tree/master/Week_09%7CMore_with_sockets/Chat_App_With_Rooms 

## Killing stale servers
* `ps -ef | grep index.js`
* `kill -9 PID`
