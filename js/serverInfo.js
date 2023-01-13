const axios = require("axios")

module.exports = class MinecraftServer {
	constructor(_server, _port) {
		this.port = _port;
		this.server = _server;
        this.online = false;
        this.playersOnline = 0;
        this.maxPlayers = 0;
        this.playerList = [];
        setInterval(() => {
            axios.get(`https://api.mcsrvstat.us/2/${this.server}:${this.port}`, {
            })
            .then(function (response) {
              response = JSON.parse(response)
              if (response.debug.ping != false) {

              }
            })
            .catch(function (error) {});  
        }, 2000)
	}

	som() {
		console.log(this.firstName + " " + this.lastName);
	}
}