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
