const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log('testinggggg', req)
        console.log('flight.destinations', flight.destinations)
        
        
        flight.destinations.push(req.body);
        
        flight.save(function(err) {
            if (err) return res.redirect(`/flights/${req.params.id}`)
            res.redirect(`/flights/${flight._id}`);
        });
    });
}