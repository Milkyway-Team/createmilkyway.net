const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()
const path = require('path')
const securePort = 443
const port = 80

const RUNMODE = "DEV" //DEV or PRODUCTION

app.use(express.static(path.join(__dirname, 'www')))

app.get('/server', (req, res) => {
  res.send('Server Page')
})

app.get('/community-server', (req, res) => {
  res.send('Community Server Page')
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/www/html/about.html'));
})

app.get('/community', (req, res) => {
  res.send('Community Page')
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
