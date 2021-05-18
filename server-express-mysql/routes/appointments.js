var express = require("express");
var router = express.Router();
var models = require("../models");



router.get("/", function(req, res, next) {
    models.appointments.findAll({ model: models.appointments})
    .then(results => res.json(results));
  });
  
//post an appointment and but needs to add a appointment name bc its supposed to autio increment the Id
  router.post("/", function(req, res, next) {
    models.appointments
    .findOrCreate({
      where: {
      appointment_Id: req.body.appointment_Id // change to name?
      },
    defaults: {
      appointment_date: req.body.appointment_date,
      confirmation: req.body.confirmation
    }
    })
    .then(results => res.json(results));
    // .spread(function(result, created) {
    //   if(created){
    //     // res.render("/" + result.appointment_date);
    //     res.send( "Appointment Created!");
    //   } else {
    //     res.status(400);
    //     res.send("error")
    //   }
    // })
  });

//gets appointments by Id and removes the appointment
 router.delete("/:id", function(req, res, next) {
    let appointment_Id = parseInt(req.params.id);
    models.appointments.findByPk(appointment_Id)
      .then(appointments => appointments.destroy())
      .then(() => res.send({ appointment_Id }))
      .catch(err => res.status(400).send(err));
  });

//gets appointment by Id and confirms the appointment
  router.put("/:id", function(req,res,next) {
    models.appointments
    .update(
      {
        date: req.body.date,
        confirm: req.body.confirm
      },
      {
        where: { appointment_Id: parseInt(req.params.id) }
      }
    ).then(appointments => res.json(appointments));
  });

module.exports = router;