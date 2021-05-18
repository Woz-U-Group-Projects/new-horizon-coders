var express = require("express");
var router = express.Router();
var models = require("../models");



router.get("/", function(req, res, next) {
    models.appointments.findAll().then(results => res.json(results));
  });
  
// router.get('/', (req,res,next) => {
//     const{ appointment_date } = req.body;
//     if (!appointment_date ){
//         return res.status (400).json({ message:"Appointment Date Required"});
//     }
// });
  

  router.post("/", function(req, res, next) {
    models.appointments
    .findOrCreate({
      where: {
      appointment_Id: req.body.appointment_Id // change to name
      },
    defaults: {
      appointment_date: req.body.appointment_date,
      confirmation: req.body.confirmation
    }
    })
    .spread(function(result, created) {
      if(created){
        res.redirect('/apointments/' + result.appointment_Id);
      // }else{
      //   res.status(400);
      //   res.send("Appointment Time Already Exist")
      // }
        res.send("Created!")
      } else {
        res.send("ERROR")
      }
    })
  });

// router.get('/appointments', function(req,res,next){
//     models.appointments
//     .findAll({where: [{ model: models.appointment_date}]})
//     .then(appointmentsFound => {
//         res.setHeader('content-type', 'appointments/json');
//         res.send(JSON.stringify(appointmentsFound))
//     })
// });
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