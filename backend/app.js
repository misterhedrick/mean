const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const postRoutes = require("./routes/posts");

const app = express();
//./mongo "mongodb+srv://cluster0-ndjug.mongodb.net/test" --username daniel
//password = SdAoFjm2XyqWBrpH
mongoose.connect("mongodb+srv://daniel:SdAoFjm2XyqWBrpH@cluster0-ndjug.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('connection failed');
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});
app.use("/api/posts", postRoutes);
module.exports = app;
