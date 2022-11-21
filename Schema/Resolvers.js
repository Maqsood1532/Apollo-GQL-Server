//const { bookingDetails } = require('../mock_old');

//const { json } = require("express");
const fs = require('fs');

const resolvers = {
    Query: {
        getBookingDetails() {

            const file = fs.readFileSync('./mock.json', 'utf8')

            return JSON.parse(file);
        },

        seachBooking(parent, {bookingCode, lastName}){

            const file = fs.readFileSync('./mock.json', 'utf8')

            var bookingFileData = JSON.parse(file);

            if (bookingFileData["bookingCode"] == bookingCode 
                &&
                bookingFileData["passengers"]["lastName"] == lastName ) {

                return bookingFileData
            }
        }
       
    },
};

module.exports = {resolvers};
