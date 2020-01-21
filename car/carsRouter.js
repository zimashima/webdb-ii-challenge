const express = require("express")
const db = require("../utils/db")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const cars = await db("cars").select()
        res.status(200).json(cars)
    }
    catch (err) {
        next(err)
    }
})


router.get("/:id", async (req,res,next) => {
    try {
        const car = await db('cars').where( "id", req.params.id).first()
        res.status(200).json(car)
    } 
    catch (err){
        next(err)
    }
})


router.post("/", async (req,res,next) => {
    try{
        const [id] = await db('cars').insert(req.body)
        res.status(200).json(await db("cars").where("id", id).first())
    }
    catch (err){
        next(err)
    }
})

router.delete("/:id", async (req,res,next) => {
    try{
        await db('cars').where("id", req.params.id).del()
        res.status(204).end()
    }
    catch (err){
        next(err)
    }
})

router.put("/:id", async (req,res,next) => {
    try{
        await db('cars').where("id", req.params.id).update(req.body)
        res.status(200).json(await db("cars").where("id", req.params.id).first())
    }
    catch (err){
        next(err)
    }
})

module.exports = router