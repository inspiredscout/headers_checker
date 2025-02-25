const express = require('express');
const app = express();

app.get('/headers', (req, res) => {
  console.log('Request Headers:', req.headers);
  res.json(req.headers);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
