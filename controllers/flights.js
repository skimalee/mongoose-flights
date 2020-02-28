const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights', flights});
    });
};

function create(req, res) {
    const dt = req.body.departs;
    if(dt){
        req.body.departs = `${dt.substr(5,2)}-${dt.substr(8,2)}-${dt.substr(0,4)}`;
    } else {
        req.body.departs = new Date() + 365*24*60*60*1000
    }
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
        // Ticket.find
        console.log(flight)
        res.render('flights/show', { title: 'Flight Detail', flight})
    });
}