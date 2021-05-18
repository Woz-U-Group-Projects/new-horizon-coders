var express = require("express");
var router = express.Router();
var models = require("../models");



router.get("/", function(req, res, next) {
    models.customers.findAll({ model: models.customers})
    .then(results => res.json(results));
  });
  
//post a customer all fields required
  router.post("/", function(req, res, next) {
    models.customers
    .findOrCreate({
      where: {
      user_name: req.body.user_name
      },
    defaults: {
      first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address:req.body.address,
    phone:req.body.phone,
    dog_name:req.body.dog_name,
    Dog_age: req.body.Dog_age,
    customer_Id: req.body.customer_Id
    }
    })
    .then(results => res.json(results));
    // .spread(function(result, created) {
    //   if(created){
    //     // res.render("/" + result.appointment_date);
    //     res.send( "Welcome New Customer");
    //   } else {
    //     res.status(400);
    //     res.send("error")
    //   }
    // })
  });

//gets appointments by Id and removes the customer
 router.delete("/:id", function(req, res, next) {
    let customer_Id = parseInt(req.params.id);
    models.customers.findByPk(customer_Id)
      .then(customers => customers.destroy())
      .then(() => res.send({ customer_Id }))
      .catch(err => res.status(400).send(err));
  });



module.exports = router;