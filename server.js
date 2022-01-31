const express = require("express");
const port = process.env.PORT || 5000
const path = require('path')
const db = require('./models/index.js')
const Sequelize = require('sequelize')
const { Op } = require("sequelize")

// app.listen(port, () => {
//   console.log('Server is running at http://localhost:' + port);
// });

// let serverObj = []

// app.get('/bar', (req, res) => {
//   res.send(serverObj)
// })

// app.post('/bar', (req, res) => {
//   const example1 = req.body
//   serverObj.push(example1)
// })

// app.get('/foo', (req, res) => {
//   const test = {foo : 'bar'}
//   res.send(test)
// }

express()
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
        return dataname[0].dataValues.name
      })
      .then((finalname) => {
        res.json(`${finalname}`)
      })
  })
  .listen(port, () => console.log('Server is running at http://localhost:' + port))

