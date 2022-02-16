const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./model/model')
const app = express()
const port = 3001
const cors = require("cors")

//  MiddleWares
app.use(express.json())
app.use(cors())

//  DB Connection
const DBConnection = ()=>{
    return mongoose
    .connect("mongodb://localhost:27017/test")
    .then((result)=>console.log('DB CONNECTED SUCCESS'))
    .catch((err)=>console.log(err))
}
DBConnection()

//const User = {Name:"Radwa",Age:22,Email:"radwa.saedm@gmail.com"}
//  Routes/APIs
app.get("/getUsers", async(req, res) => {
    try {
        const data = await UserModel.find()
        res.json({Message:"ALL DATA...",data})
    } catch (error) {
        res.json({Message:"ERROR",error})
    }
})

// router.get("/createUser", async (req, res) => {
app.post("/createUser", async (req, res) => {
    const{Name,Age,Email}=req.body
    const newUser = new UserModel({Name,Age,Email});
    try {
        await newUser.save();
        res.json({Message:"ADDED SUCCESS...",newUser});
    } catch (error) {
        res.json({Message:"ERROR",error})
    }
  })    

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))