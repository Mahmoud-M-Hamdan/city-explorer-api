'use strict'
const axios=require("axios");

let handleWeather= async (req,res)=>{
    let city_name=req.query.searchQuery;
    let lats=Number(req.query.lat);
    let lons=Number(req.query.lon);
    let url=`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lats}&lon=${lons}&key=${process.env.WEATHERBIT_API_KEY}`;
    let axiosResponse= await axios.get(url);
    let weatherData=axiosResponse.data;
    let cleanedData=weatherData.data.map(item=>{
        return new ForeCast(item.datetime,item.weather.description);
    })
    res.status(200).json(cleanedData);}

    class ForeCast{
        constructor(date,description){
            this.date=date;
            this.description=description
           
        }
    }
    
    module.exports=handleWeather
