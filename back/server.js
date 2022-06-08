const { response } = require('express')
const express = require('express')
const app = express()
const db = require("./db")
const PORT = 4000

/*
behind the scenes: middleware
- tells the app to read/write JSON files
*/
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle CORS w/ client
// For more information about CORS (Cross-Origin Resource Sharing):
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
  // Allow access from multiple origins
  const allowedOrigins = [
    "http://localhost:8080",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // Allow specific requests
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Pass to next layer of middleware
  next();
});

// endpoints


app.get("/guess", db.checkGuess);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})