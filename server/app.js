const express = require('express')
const app = express()

const lists = require('./user/index.json');

app.get('/user/lists', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.json({
    code: '0',
    data: require('./user/index.json'),
    message: 'success',
    count: 100
  });
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))