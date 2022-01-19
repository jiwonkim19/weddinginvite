const express = require("express");
const port = process.env.PORT || 5000
const path = require('path')

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
// })

express()
  .use(express.static(path.join(__dirname, 'client/dist')))
  .get('/foo', (req, res) => {
    const test = {foo : 'bar'}
    res.send(test)
  })
  .listen(port, () => console.log('Server is running at http://localhost:' + port))