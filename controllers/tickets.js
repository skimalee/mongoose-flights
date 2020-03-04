const Ticket = require('../models/ticket');
const Flight = require('../models/flight');



module.exports = {
    new: newTicket,
    create,
}

function newTicket(req, res) {
    console.log(req.params.id, "THIS IS THR PARAMS ID")
    res.render('tickets/new', {
        title: 'Add Ticket',
        flightId: req.params.id
    })
}

function create(req, res) {
    const ticketObject = req.body
    const flightId = req.params.id
    ticketObject.flightId = flightId

    const ticket = new Ticket(ticketObject)
    ticket.save(function(err){
        if (err) {
            console.log(err, 'You Fucked up')
        }
        console.log(flightId, "THIS IS THE FLIGHT OD")
        Flight.findById(flightId, function(err, flight) {
            console.log(flight)
            flight.tickets.push(ticket);
            flight.save();
        })
        res.redirect('/flights/' + flightId)
    })
}

