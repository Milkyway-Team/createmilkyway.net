const express = require('express') //Web server library 
const axios = require("axios") //Http request library
const fs = require('fs') //File system library
const https = require('https') //Https Library
const app = express() //Initialize Express App
const path = require('path') //Path Library
const securePort = 443 //HTTPS PORT
const port = 80 //HTTP PORT
const RUNMODE = "DEV" //DEV or PRODUCTION

class MinecraftServer {
	constructor(_server, _port) {
		this.port = _port;
		this.server = _server;
    this.online = false;
    this.playersOnline = 0;
    this.maxPlayers = 0;
    this.playerList = [];
    this.version
    setInterval(() => {
      axios.get(`https://api.mcsrvstat.us/2/${this.server}:${this.port}`, {
      })
      .then(function (response) {
        response = JSON.parse(response)
        if (response.debug.ping != false) {
          this.online = response.online
          this.playersOnline = response.plyers.online
          this.maxPlayers = response.maxPlayers
        }
      })
      .catch(function (error) {});  
    }, 2000)
  }
}

minecraftServer = new MinecraftServer("createmilkyway.net", 25565);

setInterval(() => {
  console.log(minecraftServer.online)
})

app.use(express.static(path.join(__dirname, 'www')))

setInterval(() => {
  axios.get('https://api.mcsrvstat.us/2/createmilkyway.net', {
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });  
}, 2000)

app.get('/server', (req, res) => {
  res.send('Server Page')
})

app.get('/community-server', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/community-server.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/about.html'));
})

app.get('/community', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/community.html'));
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/index.html'));
})

if (RUNMODE.toLowerCase() == "production") {
  var privateKey = fs.readFileSync( 'privkey.pem' );
  var certificate = fs.readFileSync( 'cert.pem' );
  https.createServer({
    key: privateKey,
    cert: certificate
  }, app).listen(securePort);
  console.log(`Production server started on port ${securePort}`)
} else {
  app.listen(port, () => {
    console.log(`Development server started on http://localhost:${port}`)
  })
  
}
