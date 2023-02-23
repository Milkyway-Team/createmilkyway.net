const express = require('express') //Web server library 
const axios = require("axios") //Http request library
const fs = require('fs') //File system library
const https = require('https') //Https Library
const app = express() //Initialize Express App
const path = require('path') //Path Library
const securePort = 443 //HTTPS PORT
const port = 80 //HTTP PORT
const os = require('os'); //OS Library
const RUNMODE = "DEV" //DEV or PRODUCTION
const { MongoClient, ServerApiVersion } = require('mongodb');
const dbUri = fs.readFileSync("dbUri.txt", "utf8")
var crypto = require('crypto');
const { time } = require('console')
//import library for getting ram usage from system
const si = require('systeminformation');

const client = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

async function getUserByEmail(_email){
  try {
    const database = client.db('milkyway');
    const users = database.collection('users');
    // Query for a movie that has the title 'Back to the Future'
    const query = { email: _email };
    const user = await users.findOne(query);
    return user;
  } catch (err) {
    console.log(err.stack);
  }
}

async function getUserByToken(_token){
  try {
    const database = client.db('milkyway');
    const users = database.collection('users');
    // Query for a movie that has the title 'Back to the Future'
    const query = { token: _token };
    const user = await users.findOne(query);
    return user;
  } catch (err) {
    console.log(err.stack);
  }
}

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

class System {
  constructor () {
    this.cpuUsage = 0;
    this.ramUsage = os.totalmem - os.freemem;
    this.freeRam = os.freemem;
    this.totalRam = os.totalmem;
  }
}

systemInfo = new System();

t = new DiscordUser("sad","asd","sd");



minecraftServer = new MinecraftServer("createmilkyway.net", 25565);

setInterval(() => {
  //console.log(minecraftServer.online)
})

app.use(express.static(path.join(__dirname, 'www')))

setInterval(() => {
  axios.get('https://api.mcsrvstat.us/1/createmilkyway.net', {
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

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/dashboard.html'));
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/index.html'));
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/login.html'));
})

app.get('/check-token', (req, res) => {
  email = req.headers.email
  token = req.headers.token
  getUserByToken(token).then((user) => {
    if (user != null) {
      if (token == user.token && email == user.email) {
        res.send(JSON.stringify({"valid": true}))
      } else {
        res.send(JSON.stringify({"valid": false}))
      }
    } else {
      res.send(JSON.stringify({"valid": false}))
    }
  })
})

//function to filter any characters that could cause a sql injection
function filterSQLCharacters(string) {
  string = string.replace(/'/g, "''");
  string = string.replace(/"/g, '""');
  string = string.replace(/;/g, '');
  string = string.replace(/--/g, '');
  string = string.replace(/#/g, '');
  string = string.replace(/\\/g, '');
  string = string.replace(/%/g, '');
  string = string.replace(/_/g, '');
  string = string.replace(/=/g, '');
  string = string.replace(/`/g, '');
  return string;
}
//get request when user submits form
app.get('/login-token', (req, res) => {
  //get email and password from request header
  email = filterSQLCharacters(req.headers.email);
  password = req.headers.password;

  getUserByEmail(email).then((user) => {
    if (user != null) {
      const hash = crypto.createHash('sha256').update(user.salt + password).digest('base64');
      if (hash.toString() == user.passwordHash) {
        _token = crypto.createHash('sha256').update(user.passwordHash+Math.floor(new Date() / 1000)).digest('base64').toString()
        const database = client.db('milkyway');
        var myquery = { email: user.email };
        var newvalues = { $set: {token: _token } };
        database.collection("users").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("New Token Set");
        });
        res.send(JSON.stringify(
          {
            "status": "success",
            "token": _token
          }
        ))
      } else {
        res.send(JSON.stringify(
          {
            "status": "failed"
          }
        ))
      }
    }
  });
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
      "server-version": minecraftServer.version,
      //return the server ram usage, cpu usage, and disk usage
      "server-ram-usage": si.ram().then(data => data),
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


ldavg = os.loadavg();
setInterval(() => {
  systemInfo.ramUsage = os.totalmem - os.freemem;
  systemInfo.freeRam = os.freemem;
  systemInfo.totalRam = os.totalmem;
  systemInfo.cpuUsage = ldavg[0]
  console.log(systemInfo.cpuUsage)
}, 2000)

setInterval(() => {
  ldavg = os.loadavg();
}, 61000)
