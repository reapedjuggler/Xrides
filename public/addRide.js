$(function () {

    let bookingId = $('#bookingId');
    let userId = $('#userId');
    let vehicleId = $('#vehicleId');
    let packageId = $('#packageId');
    let travelTypeId = $('#travelTypeId');
    let travelId = $('#travelId');
    let mobileId = $('#mobileId');
    let desktopId = $('#desktopId');
    let fromAreaId = $('#fromAreaId');
    let toAreaId = $('#toAreaId');
    let fromId = $('#fromId');
    let destId = $('#destId');
    let begDate = $('#begDate');
    let endDate = $('#endDate');
    let fromLat = $('#fromLat');
    let fromLong = $('#fromLong');
    let toLat = $('#toLat');
    let toLong = $('#toLong');
    
    $("#btn").click(function () {
            $.post('/api/rides', {
                bookingId: bookingId.val(),
                userId: userId.val(),
                vehicleId: vehicleId.val(),
                packageId:packageId.val(),
                travelTypeId: travelTypeId.val(),
                travelId: travelId.val(),
                mobileId: mobileId.val(),
                desktopId:desktopId.val(),
                fromAreaId: fromAreaId.val(),
                toAreaId: toAreaId.val(),
                fromId: fromId.val(),
                destId: destId.val(),
                begDate: begDate.val(),
                endDate: endDate.val(),
                fromLat: fromLat.val(),
                fromLong: fromLong.val(),
                toLat: toLat.val(),
                toLong: toLong.val(),
            })
        });

});