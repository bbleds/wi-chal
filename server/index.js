// server config file

const express = require('express')
const path = require('path')
const port = 4000

// init app
const app = express()

// handle static files based on project structure
app.use(express.static(__dirname+'/../client/dist'))

// handle simple routing for this challenge
app.get('/', (req, res) => res.sendFile(path.join('/index.html')) )
app.get('*', (req, res) => res.redirect('/') )

// spin up our server
app.listen(port, () => console.log('listening on port', port) )
