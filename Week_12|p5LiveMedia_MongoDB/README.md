# Week 12 | Class 1

* Housekeeping - attendance
* Homework - super quick review of everyones work!
* Project 3 ideas and discussion! - https://docs.google.com/document/d/1J0pt7oG_75UdhP7n-3euDWDdny6xYPoZC2kbdBlkemw/edit
* Plan for class on Thursday
  * p5LiveMedia
  * quickmongo

# Week 12 | Class 2

- Peer to Peer Networks with WebRTC
    - [WebRTC Samples](https://webrtc.github.io/samples/)
    - [WebSockets vs WebRTC](https://www.educba.com/websockets-vs-webrtc/)
    - Examples
        - [YORB](https://yorb.itp.io/)
        - [Secret Forest](https://a-secret-forest.glitch.me/index.html)
- [P5Live Media](https://github.com/vanevery/p5LiveMedia)
    - Using someone else’s server:
        - [https://editor.p5js.org/shawn/sketches/U396jFtFT](https://editor.p5js.org/shawn/sketches/U396jFtFT) (with no audio)
        - [https://editor.p5js.org/dano/sketches/ZVOoN1GB9](https://editor.p5js.org/dano/sketches/ZVOoN1GB9) (with audio)
    - Using your own server:
        - Below are 2 examples for running your own server, one is on Glitch, and the other is on Github, meant for you to run on localhost.
            - [Example on github](https://github.com/MathuraMG/IMA-Low-Res-Connections-Lab/tree/master/Week_12%7Cp5LiveMedia_MongoDB/video_chat_p5LiveMedia)
            - [Example on glitch](https://p5livemedia-example.glitch.me/examples) | [Code on glitch](https://glitch.com/edit/#!/p5livemedia-example?path=public%2Fexamples%2Fapp.js%3A1%3A0)
        - The key differences between the 2 examples are
            - in `app.js`  in the `example` folder, in line 13, we need to mention the host server we are connecting to, you will notice that that is different in the 2 examples
            - in the localhost example (i.e the one on github), we need certificates to run the examples because webRTC will only run on `https`. You can get the certificate using an `openssl` tool on your command line and entering the following - `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem` - use this only for development purposes. In the glitch example, no certificate is required since glitch itself has `https`
- SimplePeer - [Code Example on Github](https://github.com/MathuraMG/IMA-Low-Res-Connections-Lab/tree/master/Week_12%7Cp5LiveMedia_MongoDB/video_chat_simplepeer)
- MongoDB & QuickMongo - [Code Example on Github](https://github.com/MathuraMG/IMA-Low-Res-Connections-Lab/tree/master/Week_12%7Cp5LiveMedia_MongoDB/12.2-Coffee_Tracker_MongoDB)
