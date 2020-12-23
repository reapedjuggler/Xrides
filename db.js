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

    // A List to send paramiterized Queries
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

    // Assuming a table named rides already exist

    // console.log("Inside Addride\n\n\n")

    const insertText = `INSERT INTO rides(bookingid, userid, vehicleid, packageid, traveltypeid, travelid, mobileid, 
                        desktopid, fromareaid, toareaid, fromid, destid, begdate, enddate, fromlat, fromlong, tolat, tolong) 
                        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,
                        $10, $11, $12, $13, $14, $15, $16, $17, $18)`

    // console.log(values, "  iam values\n\n")

    return new Promise((resolve, reject) => {
        // console.log("INside promise ")
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