
var express = require("express");
var router = express.Router();
var models = require("../models");
// var appointments = require('../models/appointments');


router.get("/appointments", function(req, res, next) {
    models.Appointments.findAll().then(appointments => res.json(appointments));
  });
  
router.get('/appointments', (req,res,next) => {
    const{ appointment_date } = req.body;
    if (!appointment_date ){
        return res.status (400).json({ message:"Appointment Date Required"});
    }
});
  

  router.post("/appointments", function(req, res, next) {
    let newAppointments = new models.appointments();
    newAppointments.appointment_date = req.body.date;
    newAppointments.confirmation = req.body.confirmation;
    newAppointments.save().then(appointments => res.json(appointments));
  });

router.get('/appointments', function(req,res,next){
    models.appointments
    .findAll({where: [{ model: models.appointment_date}]})
    .then(appointmentsFound => {
        res.setHeader('content-type', 'appointments/json');
        res.send(JSON.stringify(appointmentsFound))
    })
});
 // router.delete("/:id", function(req, res, next) {
  //   let appointment_Id = parseInt(req.params.id);
  //   models.Appointments.findByPk(taskId)
  //     .then(appointments => appointments.destroy())
  //     .then(() => res.send({ appointment_Id }))
  //     .catch(err => res.status(400).send(err));
  // });

  // router.put("/:id", function(req, res, next) {
  //   models.appointments.update(
  //     {
  //       date: req.body.date,
  //       confirm: req.body.confirm
  //     },
  //     {
  //       where: { appointment_Id: parseInt(req.params.id) }
  //     }
  //   ).then(appointments => res.json(appointments));
  // });

module.exports = router;