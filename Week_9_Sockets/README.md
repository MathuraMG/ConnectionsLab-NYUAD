# Week 9 - Class 1

## Class Plan
* Housekeeping - attendance, assignment
* Recap - any questions?
* Build a chat app

## Chat app
* Starter code can be downloaded from here - https://drive.google.com/drive/folders/1buPgAh2pjBLIMX6N4JR97PdinNKknHir?usp=sharing
* Steps we will do together
  * set up the flow of information from client to server and back
  * store that information in the server - share it with new joiners

# Class 2

* Discuss ideas -> https://docs.google.com/document/d/1RdKYnMEL2qKGOnTtIyaWxzfu1h-_u8zPM6VdCCOFC3c/edit
* Homework review

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
* ps -ef  grep index.js
* kill -9 PID
