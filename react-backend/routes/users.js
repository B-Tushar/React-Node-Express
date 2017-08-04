var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
  	{id: 1,firstname: "user_01_first",lastname:"user_01_last",email:"user1@mail.com"},
  	{id: 2,firstname: "user_02_first",lastname:"user_02_last",email:"user2@mail.com"}, 
  	{id: 3,firstname: "user_03_first",lastname:"user_03_last",email:"user3@mail.com"}, 
  	{id: 4,firstname: "user_04_first",lastname:"user_04_last",email:"user4@mail.com"}, 
  	{id: 5,firstname: "user_05_first",lastname:"user_05_last",email:"user5@mail.com"}
  	]);
});

module.exports = router;