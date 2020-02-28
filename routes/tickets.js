const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets')

router.get('/flights/:flightId/tickets/new', ticketsCtrl.new)
router.post('/flights/:flightId/tickets/create', ticketsCtrl.create)

module.exports = router;