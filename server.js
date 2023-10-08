const express = require('express');
const path = require('path');
const server = express();

// set the view engine to ejs
server.set('view engine', 'ejs');

// For handling POST and PUT requests
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

// Calling our API and using it as a middleware
server.use('/', express.static(path.join(__dirname, 'public')))
server.use('/api', require('./routes/api').route)    

/*
For the sake of deployment , also normalizePort is there to check for the validity of PORT number 
     const port = normalizePort(process.env.PORT || '3000');
*/

server.listen(3001, (req, res, next) => {
    console.log("Server started on port https://localhost:3000")
});
