const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node 3');
});

app.get('/node2', (req, res) => {
  res.redirect('http://ming-node2:3000');
});

app.get('/node3', (req, res) => {
  res.redirect('http://ming-node3:3000');
});

app.listen(port, () => {
  console.log(`Node 1 server running at http://localhost:${port}`);
});
