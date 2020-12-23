const express = require('express');
const path = require('path');
const server = express();

// const route = require('express').Router();
const Ride = require('./db');

// For handling POST and PUT requests
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

server.use('/', express.static(path.join(__dirname, 'public')))
server.use('/api', require('./routes/api').route)    

// server.post('/', (req, res) => {
//     console.log("Hye post  sadhksabdjhas \n\n\n", req.body, "\n\n\n")
//     Ride.addRide(
//             null,
//             req.body.userId,
//             req.body.vehicleId,
//             req.body.packageId,
//             req.body.travelTypeId,
//             req.body.travelId,
//             req.body.mobileId,
//             req.body.desktopId,
//             req.body.fromAreaId,
//             req.body.toAreaId,
//             req.body.fromId,
//             req.body.destId,
//             req.body.begDate,
//             req.body.endDate,
//             req.body.fromLat,
//             req.body.fromLong,
//             req.body.toLat,
//             req.body.toLong,
//             req.body.done
//         )
//         .then(() => {
//             res.send("Hello Juggler");
//             // res.redirect("/");
//         })
//         .catch((err) => {
//             console.log("Arigato ", req.body, "\n\n");
//             res.redirect('/server')
//         })

// })

/*
For the sake of deployment , also normalizePort is there to check for the validity of PORT number 
     const port = normalizePort(process.env.PORT || '3000');
*/

server.listen(3000, (req, res, next) => {
    console.log("Server started on port https://localhost:3000")
});