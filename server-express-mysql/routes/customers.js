var express = require("express");
var router = express.Router();
var models = require("../models");


router.get('/', function(req, res, next) {
  models.customers.findAll({}).then(foundCustomers => {
    res.send(JSON.stringify(foundCustomers));
  });
});

// router.get('/', function(req, res, next) {
//   models.customers.findAll({}).then(foundCustomers => {
//     const mappedCustomers = foundCustomers.map(customers => ({
//     CustomerUser: customers.user_name,
//       Name: `${customers.first_name} ${customers.last_name}`
//     }));
//     res.send(JSON.stringify(mappedCustomers));
//   });
// });



  
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
    },
    })
    .spread(function(result,created) {
      if (created) {
        res.redirect('/login/' + result.customer_Id );
       
      } else {
        res.send("This person already exist!")
      }
    })
    // .then(results => res.json(results));
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