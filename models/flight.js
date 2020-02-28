const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    destination: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ]
    },
    arrival: {
        type: String
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date() + 365*24*60*60*1000
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ],
        default: 'SAN'
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model(
    'Flight',
    flightSchema
)

