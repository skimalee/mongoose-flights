const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req, res) {
    Flight.find({}, function(err, flight) {
        res.render('flights/index', {title: 'All Flights', flight});
    });
};

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render('/flights');
        console.log(flight);
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight)
        res.render('flights/show', { title: 'Flight Detail', flight})
    });
}