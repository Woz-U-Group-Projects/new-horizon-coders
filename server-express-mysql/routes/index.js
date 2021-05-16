var express = require("express");
var router = express.Router();
var models = require("../models");
// var staff = require ("./models/staff")


router.get('/', function(req, res, next) {
    res.send('successfull');
  });

  // router.post('/', function(req, res, next) {
  //   res.send('successfull');
  // });

 

router.get('/staff/:id', function(req, res, next) {
  let staff = staff.staff.find(staff => {
    return staff.id === parseInt(req.params.id);
  });
  res.render('login', { staff });
});




 

 
  
  module.exports = router;