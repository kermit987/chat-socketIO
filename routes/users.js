var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).send('respond with a ressource')
  console.log('respond with a ressource')
  // res.send('respond with a resource')
})

module.exports = router
