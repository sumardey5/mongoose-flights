const Flight = require("../models/flight");

module.exports = {
    index,
    new: newFlight,
    create
  };

  function index(req, res) {
    Flight.find({}, function(err, flights) {
      //'{}' = first parameter is query parameter(what we're looking for)
      //function() is the 2nd parameter 
      res.render('flights/index', {
        flights,
        title: 'List of flights'
      });
      //'flights/index' is the ejs that's asking for the flights data
    });
  }

  function newFlight(req, res) {
      res.render('flights/new');
  }

  function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if(err) return res.render('flights/new');
      res.redirect('/flights');
    })
  }