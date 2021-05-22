var express = require("express");
var router = express.Router();
var models = require("../models");





router.get('/', function(req, res, next) {
  models.staff.findAll({}).then(foundStaff => {
    // const mappedStaff = foundStaff.map(staff => ({
      // StaffUser: staff.user_name,
      // Name: `${staff.first_name} ${staff.last_name}`
    // }));
    res.send(JSON.stringify(foundStaff));
  });
});



//post a staff fields required
  router.post("/", function(req, res, next) {
    models.staff
    .findOrCreate({
      where: {
        staff_Id: req.body.staff_Id 
      },
    defaults: {
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    // misc:req.body.misc
    }
    })
    // .then(results => res.json(results));
    .spread(function(result, created) {
      if(created){
        res.render("/login" + result.staff_Id);
        // res.send( "Welcome to walk the dog & services");
      } else {
        res.status(400);
        res.send("error")
      }
    })
  });




// gets staff by Id and removes the employee

router.delete("/:id", function(req, res, next) {
  let staff_Id = parseInt(req.params.id);
  models.staff.findByPk(staff_Id)
    .then(staff => staff.destroy())
    .then(() => res.send({ staff_Id }))
    .catch(err => res.status(400).send(err));
});



module.exports = router;



 