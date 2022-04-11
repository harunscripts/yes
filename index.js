const express = require("express")

const app = express()

var reqs = 0

app.get("/reqs", function(req, res) {
  res.send(reqs + "")
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
  reqs = reqs + 1
})

setInterval(function() {
  reqs = 0
}, 1000)


app.listen(3000)