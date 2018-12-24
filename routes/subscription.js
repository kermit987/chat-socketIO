var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  console.log('epitech paris france')
  res.status(200).send('Subscription success')
})


module.exports = router
