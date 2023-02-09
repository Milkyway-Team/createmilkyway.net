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

class DiscordUser {
  constructor (name, avatar, status) {
    this.status = status;
    this.avatar = avatar;
    this.name = name;
  }
}

t = new DiscordUser("sad","asd","sd");



minecraftServer = new MinecraftServer("createmilkyway.net", 25565);

setInterval(() => {
  //console.log(minecraftServer.online)
})

app.use(express.static(path.join(__dirname, 'www')))

setInterval(() => {
  axios.get('https://api.mcsrvstat.us/2/createmilkyway.net', {
  })
  .then(function (response) {
    //console.log("response");
    if (response.data.debug.ping) {
      minecraftServer.version = response.data.version
      minecraftServer.port = response.data.port
      minecraftServer.server = response.data.hostname
      minecraftServer.online = response.data.online
      minecraftServer.playersOnline = response.data.players.online
      minecraftServer.maxPlayers = response.data.players.max
      minecraftServer.playerList = response.data.players.list
    }
  })
  .catch(function (error) {
    console.log(error);
  });  
}, 2000)

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

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/login.html'));
})

//get request when user submits form
app.get('/login-token', (req, res) => {
  //get email and password from request header
  email = req.headers.email;
  password = req.headers.password;

  console.log(email);
  console.log(password);
  res.sendStatus(200);
})

app.get('/api/get-important-users', (req, res) => {
  res.status(200).json(
    {
      "status": "cached-result", //can also be "no-data"
      "users": []
    }
  )
})

app.get('/api/server-status', (req, res) => {
  res.status(200).json(
    {
      "status": "cached-result", //can also be "no-data"
      "online": minecraftServer.online,
      "players-online": minecraftServer.playersOnline,
      "max-players": minecraftServer.maxPlayers,
      "player-list": minecraftServer.playerList,
      "server-version": minecraftServer.version
    }
  )
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
