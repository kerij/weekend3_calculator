var express = require('express');
var router = express.Router();

var answ = {answer: 0}

router.get('/', function(req, res) {
  res.send(answ);
})


router.post('/add', function(req, res) {
  console.log(req.body.number1);
  ans = parseFloat(req.body.number1) + parseFloat(req.body.number2);
  answ.answer = ans;
  console.log(ans);
  console.log("added");
  res.sendStatus(201);
});
router.post('/subtract', function(req, res) {
  var ans = parseFloat(req.body.number1) - parseFloat(req.body.number2);
  answ.answer = ans;
  console.log("subtracted");
  res.sendStatus(201);
});
router.post('/multiply', function(req, res) {
  var ans = parseFloat(req.body.number1) * parseFloat(req.body.number2);
  answ.answer = ans;
  console.log("multiplied");
  res.sendStatus(201);
});
router.post('/divide', function(req, res) {
  var ans = parseFloat(req.body.number1) / parseFloat(req.body.number2);
  answ.answer = ans;
  console.log("divided");
  res.sendStatus(201);
});


module.exports = router;
