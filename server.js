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

/*
"use strict";
const express=require("express");
const server=express();
const cors=require("cors");
require("dotenv").config();
const PORT=process.env.PORT;
const axios=require("axios");
const { response } = require("express");
const Cache=require("./helpers/cache");
server.use(cors());
let cache=new Cache();

server.get("/",(req,res)=>{
    res.send("hello world")
})

server.get("/data",(req,res)=>{
    let currentDate=new Date()
    console.log("cache date",cache.date.getDate());
    if(cache.data.length>0 && cache.date.getDate()===currentDate.getDate()){
        res.json({"data":cache,"message":"data retrieved from the cache"});
    }else{
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(response=>{
            cache.data=response.data;
            cache.date=currentDate;
            res.json({"data":cache.data,"message":"data is coming from the api"});
        })
    }
})

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});
*/
/*
'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');

const weather = require('./modules/weather.js');
const app = express();

app.get('/weather', weatherHandler);

function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
  .then(summaries => response.send(summaries))
  .catch((error) => {
    console.error(error);
    response.status(200).send('Sorry. Something went wrong!')
  });
}  

app.listen(process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));




*/




