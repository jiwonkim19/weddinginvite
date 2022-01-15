const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});

let serverObj = []

app.get('/bar', (req, res) => {
  res.send(serverObj)
})

app.post('/bar', (req, res) => {
  const example1 = req.body
  serverObj.push(example1)
})

app.get('/foo', (req, res) => {
  const test = {foo : 'bar'}
  res.send(test)
})