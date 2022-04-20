# Week 12

## Class Plan
* Housekeeping - attendance
* Little parts of project 2 to be completed
* WebRTC

## WebRTC
[P5 live stream](https://github.com/vanevery/p5LiveMedia) - tons of front end examples. Let’s walk through the documentation together

If you want your own server

Download the starter folder - https://drive.google.com/drive/folders/1-O4zUs0Q0HVibJKy4gx7wqtDTgr4Fy-t?usp=sharing
Make sure to add local.cert, and local.key (DO NOT COMMIT THIS! I ONLY SHARED IT FOR THE CLASS)
Note: If you were to upload this on glitch, you will not need to do this, the code will look a little different  - 

**NOTE:** If you deploy your project to Glitch, it will take care of “securing” your app, which means you do not need the certificates and can run a simple http server. It also means you will need a different port number, because 443 works only with https. Your code should look like this:
```
/*Step 1.4. Start a http server*/
let http = require('http');

//create a server on the app object
let httpServer = http.createServer(app);
//create a port variable and listen
let port = process.env.port || 3000;
httpServer.listen(port, ()=>{
  console.log('Server listening on port ', port);
});
```

## Higher level steps
1. Establish a server connection (each client separately using socket.io)
2. Establish peer connection with the help of the server: ‘signal’ event
3. Directly communicate peer to peer (no server is needed): ‘connect’, ‘stream’ and other events


## Issue running the Code Example in Chrome 
HTTPS  with local certificates USED to be allowed in chrome,  but is not currently enabled. To re-enable, you can  follow these steps:
1. In Chrome, go to the following address:chrome://flags/#temporary-unexpire-flags-m92 (and/or 93) 
2. Set to “Enabled”
3. Restart Chrome 
4. In Chrome, go to the following address:chrome://flags/#allow-insecure-localhost
5. It will be set to “Disabled”. Set to “Enabled”
6. Restart Chrome again
7. Run example

## Git and github

*(Video Reference)[https://drive.google.com/drive/u/1/folders/1buPgAh2pjBLIMX6N4JR97PdinNKknHir]*

### Install git
* Installing git - https://git-scm.com/downloads
* NOTE: For Mac users, the preferred method to install git would be to first install homebrew - https://git-scm.com/download/mac

### Common git commands
* To initialise a git repository (i.e. repo)
  *  Go to the folder where the code you want to work with lives. This is colloquially known as the root folder
  * `git init`
* To find the status of your repo (this command is your best friend)
  * `git status`
  * NOTE: You can also type git status -s which will display a shorthand version
* To track the files that are present in your repository
  * `git add -A .`
  * NOTE: You can also just type git add -A without the . at the end
* To commit the files that are present in your repository
  * git commit -m “your message”
  * NOTE: The message must be in wrapped in quotes
* To find difference in files
  * git diff

### QUESTION: When should you make git commits?
* You only need  to run git add  and git commit after a bulk of changes, not after every individual change. Think of it in the same frequency as you would when you decide to save a new file or version (file_2.txt).
* Basically, you do not need to do it after every single change. It’s common to make a commit at the end of a session of working , or at the end of the day, or after you’ve gotten the project to a stable working place and would like  to ensure that you have a version "saved".
* Rules to remember when you're initialising a repo
  1. ONLY create a git repo ONCE for a project.
  1. It should be made (i.e. initialized) at the same directory level as the main parent folder that contains all of the files for your individual project.
  1. Do NOT make a git repository inside a folder that has already been initialized as a git repository. Also, avoid placing a folder that has a git repository associated with it inside another folder that has a git repository associated with it.
  1. Do NOT make a git repository for a parent folder that has a git repository already inside it.
  1. Basically, git repositories should be singular,  unique to a project and not associated with other git repositories. A git repository  should be  tied to the parent folder of a project, and separated from other parent project folders that are git repositories. 

