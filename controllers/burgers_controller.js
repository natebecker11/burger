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


router.post('/api/burgers', (req, res) => {
  let newBurgerName = req.body.burgerName
  // console.log(newBurgerName)
  burger.insertOne(newBurgerName, data => {
    console.log(data)
    let burgers = {
      data: data
    }
    res.render('index', burgers)
  })
})

router.put('/api/burgers', (req, res) => {
  let { devoured, id } = req.body
  // console.log(devoured + ' ' + id)
  burger.updateOne()
})


module.exports = router