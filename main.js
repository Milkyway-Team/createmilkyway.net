const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()
const securePort = 443
const port = 80

const RUNMODE = "DEV" //DEV or PRODUCTION

app.get('/www/favicon.jpg', (req, res) => {
  res.sendFile('/root/webserver/www/favicon.jpg');
})

app.get('/src/navbar.png', (req, res) => {
  res.sendFile('/root/webserver/www/src/navbar.png');
})

app.get('/fonts/Minecraft-Regular.ttf.eot', (req, res) => {
  res.sendFile('/root/webserver/www/fonts/Minecraft-Regular.ttf.eot');
})
app.get('/fonts/Minecraft-Regular.ttf.svg', (req, res) => {
  res.sendFile('/root/webserver/www/fonts/Minecraft-Regular.ttf.svg');
})
app.get('/fonts/Minecraft-Regular.ttf.woff', (req, res) => {
  res.sendFile('/root/webserver/www/fonts/Minecraft-Regular.ttf.woff');
})

app.get('/sitemap.txt', (req, res) => {
  res.sendFile('/root/webserver/sitemap.txt');
})

app.get('/css/index.css', (req, res) => {
  res.sendFile('/root/webserver/www/css/index.css');
})

app.get('/www/js/index.jsx', (req, res) => {
  res.sendFile('/root/webserver/www/js/index.jsx');
})

app.get('/googleecd4c64bd68c095c.html', (req, res) => {
  res.sendFile('/root/webserver/googleecd4c64bd68c095c.html');
})


app.get('/server', (req, res) => {
  res.send('Server Page')
})

app.get('/community-server', (req, res) => {
  res.send('Community Server Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/community', (req, res) => {
  res.send('Community Page')
})




app.get('/', (req, res) => {
  res.sendFile('/root/webserver/www/index.html');
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
