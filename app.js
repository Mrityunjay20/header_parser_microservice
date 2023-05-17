//jshint esversion:6

const { json } = require('body-parser');
const express = require('express');

const app = express();

app.get("/api/whoami", (req, res) => {
    var ipadress = req.ip;
    var language = req.acceptsLanguages();
    var software=req.get("User-Agent");
     res.json({
     ipadress: ipadress,
     language:language[0],
     software:software
     });
    });


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });