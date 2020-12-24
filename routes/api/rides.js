const route = require('express').Router();
const Ride = require('../../db');

route.post('/', (req, res, next) => {

    /* Before calling addRide we can also call a CHECK function which validates the values first */

    Ride.addRide(
            req.body.bookingId,
            req.body.userId,
            req.body.vehicleId,
            req.body.packageId,
            req.body.travelTypeId,
            req.body.travelId,
            (req.body.mobileId === undefined ?'off': 'on') ,
            (req.body.desktopId === undefined ?'off': 'on'),
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

            const acceptedMessage = "Your request has been Accepted";
            res.render('accepted', {
                message: acceptedMessage,
            })

        })
        .catch((err) => {

            const failedMessage = "404 Try Again";
            res.render('failed', {
                message: failedMessage,
            })
        })

})

// A additional route can be made here for handling the accepted and failed forms
// Example is shown below
/*
    route.post('/result', (req, res, next) => {
    
    });
*/


exports = module.exports = {
    route,
}