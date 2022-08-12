# Week 10 

## Class Plan
* Attendance
* User testing reminder
* Recap - rooms. Any questions?
* [Renaming a project on glitch](https://help.glitch.com/kb/article/34-changing-a-project-s-name-description-avatar/) - this used to be easier!
* Namespaces - demo
* Namespaces workshop (remind me to record this on Zoom in case I forget)
* Git - github workshop

## Namespaces
* DEMO Trivia Example - https://glitch.com/edit/#!/ima-cl-21-trivia-app 
  * Input Page -https://ima-cl-21-trivia-app.glitch.me/input
  * Output Page - https://ima-cl-21-trivia-app.glitch.me/output
* Remember, even if we don't explicitly use namespaces, we are present in the default '\' namespace
* From a code perspective, here a few important notes to remember about namespaces
  * in the server, we will need to specify the namespace before using the socket by saying `let namespaceSockets = io.of('/mynamespace') `
  * additionally, when we are adding events to the socket, we will say `namespaceSockets.on` instead of `io.sockets.on`. 
  * in the client, we will say `let socket = io('/mynamespace')` - everything else remains the same

## Git github workshop
* We will do this for the teams collaborating for now