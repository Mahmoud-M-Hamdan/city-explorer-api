'use strict'
const axios=require("axios");
const cache = require('./cache.js');


let handleMovie=  (request, response) => {
    let country_code = request.query.country_code;
    getMovie(country_code)
     .then(summaries => response.json(summaries))
     .catch((error) => {
       console.error(error);
       response.status(200).send('Sorry. Something went wrong!')
     });}


function getMovie(country_code) {
    const key = 'movie-' + country_code;;
    let region = country_code.toLocaleUpperCase();
    let url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&region=${region}`;
  
    if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
      console.log('Cache hit');
    } else {
      console.log('Cache miss');
      cache[key] = {};
      cache[key].timestamp = Date.now();
      cache[key].data = axios.get(url)
      .then(response => parseMovie(response.data));
    }
    
    return cache[key].data;
  }

  function parseMovie(MovieData) {
    try {
      const MovieSummaries = MovieData.results.map(item => {
        return new Movieee(item.title,item.vote_average,item.vote_count,item.popularity,item.release_date);
      });
      return Promise.resolve(MovieSummaries);
    } catch (e) {
      return Promise.reject(e);
    }
  }

class Movieee{
    constructor(title,vote_average,vote_count,popularity,release_date){
        this.title=title;
        this.vote_average=vote_average;
        this.vote_count=vote_count;
        this.popularity=popularity;
        this.release_date=release_date
        
    }
}






module.exports=handleMovie


/*

const cache = require('./cache.js');

let handleWeather= async (req,res)=>{
    let lat = Number(request.query.lat);
    let lon  = Number(request.query.lon);
    getWeather(lat, lon)
     .then(summaries => response.send(summaries))
     .catch((error) => {
       console.error(error);
       response.status(200).send('Sorry. Something went wrong!')
     });}




function getWeather(latitude, longitude) {
  const key = 'weather-' + latitude + longitude;
  const url = `http://api.weatherbit.io/v2.0/forecast/daily/?key=${process.env.WEATHERBIT_API_KEY}&lang=en&lat=${lat}&lon=${lon}&days=5`;

  if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
    console.log('Cache hit');
  } else {
    console.log('Cache miss');
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
    .then(response => parseWeather(response.data));
  }
  
  return cache[key].data;
}

function parseWeather(weatherData) {
  try {
    const weatherSummaries = weatherData.data.map(day => {
      return new ForeCast(day);
    });
    return Promise.resolve(weatherSummaries);
  } catch (e) {
    return Promise.reject(e);
  }
}
    class ForeCast{
        constructor(day){
            this.forecast = day.weather.description;
            this.time = day.datetime;
           
        }
    }

    */