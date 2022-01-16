const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const { Pool, Client } = require('pg')
const bodyParser = require('body-parser')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'weddinginvite',
  password: 'password',
  port: 5432,
})

//MIDDLEWARE
app.use(express.static('client/dist'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//ROUTES

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

app.get('/foo', async (req, res) => {
  const template = 'SELECT name FROM weddinglist LIMIT 1'
  const oneString = await pool.query(template)

  const body = {
    foo: oneString.rows[0].name
  }
  res.json(body)
})


