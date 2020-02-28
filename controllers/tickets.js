const Ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    create,
}

function newTicket(req, res) {
    res.render(`/tickets/new`, {
        title: 'Add Ticket',
        flightId: req.params.flightId
    });
};

function create(req, res) {
    const ticketObject = req.body
    const flightId = req.params.flightId

    ticketObject.flightId = flightId

    const ticket = new Ticket(ticketObject)

    ticket.save(function(err){
        if (err) {
            console.log(err, 'You Fucked up')
        }
        console.log('success')
        console.log(ticket)
    flight.tickets.push(ticketObject)
        console.log(flight)
        res.redirect('/flights/' + flightId)
    })
}

