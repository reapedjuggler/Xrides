const Pool = require('pg').Pool;

// Establishing a connection
// Key point --> port number can be checked by *\conninfo* command in postgres

const connection = new Pool({
    user: 's0ber',
    host: 'localhost',
    database: 's0ber',
    password: 'sober7226',
    port: 5432,
})

/*
    Assuming a table named rides already exist, if not we can create easily create one
    We can also make two separate Tables for Users and Bookings, just in case to add authorization
*/

// A function to add query into our Database
function addRide(
    bookingId,
    userId,
    vehicleId,
    packageId,
    travelTypeId,
    travelId,
    mobileId,
    desktopId,
    fromAreaId,
    toAreaId,
    fromId,
    destId,
    begDate,
    endDate,
    fromLat,
    fromLong,
    toLat,
    toLong,
) {

    // A List of values to send paramiterized Queries
    const values = [
        bookingId,
        userId,
        vehicleId,
        packageId,
        travelTypeId,
        travelId,
        mobileId,
        desktopId,
        fromAreaId,
        toAreaId,
        fromId,
        destId,
        begDate,
        endDate,
        fromLat,
        fromLong,
        toLat,
        toLong
    ]

    // Required query which needs to be executed 
    const insertText = `INSERT INTO rides(bookingid, userid, vehicleid, packageid, traveltypeid, travelid, mobileid, 
                        desktopid, fromareaid, toareaid, fromid, destid, begdate, enddate, fromlat, fromlong, tolat, tolong) 
                        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,
                        $10, $11, $12, $13, $14, $15, $16, $17, $18)`

    return new Promise((resolve, reject) => {

        connection.query(insertText, values, (err, res) => {

            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    });
}

exports = module.exports = {
    addRide,
}