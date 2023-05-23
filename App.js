require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")

// const path = require("path")

// Databse Connection
const connectToDB = require("./config/database")
connectToDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const PORT = process.env.PORT || 3600
app.listen(PORT,()=>{
    console.log("APP is running at port number:-" , PORT)
})