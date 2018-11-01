const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    console.log(data)
    let burgers = {
      data: data
    }
    res.render('index', burgers)
  })  
})

// router.post('/api/burgers', (req, res) => {
//   burger.insertOne(())
// })



module.exports = router