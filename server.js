const express = require('express');
const uap = require('ua-parser-js');
const app = express();

app.get('/headers', (req, res) => {
  console.log('Request Headers:', req.headers);

  // Set each request header into the response headers
  for (const [key, value] of Object.entries(req.headers)) {
    res.setHeader(key, value);
  }
  const ua = uap(req.headers).withClientHints()

  res.json({
    ua: ua,
    headers: req.headers
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
