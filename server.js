const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const path = require("path")

app.use(express.static(path.join(__dirname, 'build')))

app.listen(port, ()=>console.log("Server up and running at "+port))