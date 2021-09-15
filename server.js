"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
//const weatherData = require('./data/weather.json');
//const { json } = require('express');
const PORT = process.env.PORT;
const axios=require("axios");
const handleMovie=require("./movies")
const handleWeather=require("./weather")





app.get('/',(req,res)=>{
    res.status(200).json({"message":"I'm working"})
})




app.get('/weather',handleWeather)
app.get('/movie',handleMovie)


app.listen(PORT,()=>{
   console.log(`listening to port ${PORT}`)
});









