const route = require('express').Router();
const Ride = require('../../db');

route.get('/api/rides', (req, res) => {
    console.log("hello");
    res.send(" Hey s0ber");
})

route.post('/', (req, res, next) => {
    Ride.addRide(
            req.body.bookingId,
            req.body.userId,
            req.body.vehicleId,
            req.body.packageId,
            req.body.travelTypeId,
            req.body.travelId,
            req.body.mobileId,
            req.body.desktopId,
            req.body.fromAreaId,
            req.body.toAreaId,
            req.body.fromId,
            req.body.destId,
            req.body.begDate,
            req.body.endDate,
            req.body.fromLat,
            req.body.fromLong,
            req.body.toLat,
            req.body.toLong,
            req.body.done   
        )
        .then(() => {
            console.log(" inside addRide in rides.js ")
            res.send("Hello Juggler");
        })
        .catch((err) => {
            res.send("Sorry !")
        })

})

exports = module.exports = {
    route,
}