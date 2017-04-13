const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare()
.then(() => {
  const server = express();
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
  server.use(bodyParser.json());

  server.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello-world');
  });

  server.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello-world');
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000')
  })
});
