const express = require("express");
const port = process.env.PORT || 5000
const path = require('path')
const db = require('./models/index.js')
const Sequelize = require('sequelize')
const { Op } = require("sequelize")
const bodyParser = require('body-parser')


express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use(express.static(path.join(__dirname, 'client/dist')))
  .get('/foo', (req, res) => {
    const test = { foo: 'bar' }
    res.send(test)
  })
  .get('/rsvp', (req, res) => {
    db.RSVP.findAll()
      .then((data) => {
        res.send(data)
      })
  })
  .get('/name/:name', (req, res) => {
    db.RSVP.findAll({
      where: {
        name: {
          [Op.iLike]: `%${req.params.name}%`
        }
      }
    })
      .then((dataname) => {
        if (dataname.length === 0) { res.json("No record found") }
        else {
          res.json(
            dataname[0].dataValues
          )
        }
      })
  })
  .put('/rsvp/:name', (req, res) => {
    db.RSVP.update(
      {
        rsvp: req.body.rsvp.attendance,
        food: req.body.rsvp.food,
      },
      {
        where: {
          name: {
            [Op.iLike]: `%${req.params.name}%`
          }
        }
      }
    )
  })
  .listen(port, () => console.log('Server is running at http://localhost:' + port))