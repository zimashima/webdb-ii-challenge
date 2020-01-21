const express = require("express")

const server = express()

const carsRouter = require("./car/carsRouter")

server.use(express.json())

server.get("/", (req, res)=> {
    res.send(`<h1>Can't believe you did it!</h1>`)
})

server.use("/api/cars", carsRouter)

module.exports = server