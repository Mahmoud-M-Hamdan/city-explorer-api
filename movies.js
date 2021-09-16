'use strict'
const axios=require("axios");


let handleMovie= async (req,res)=>{
    let loc = req.query.country_code;
    let url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&region=${loc}`;
    let axiosResponse= await axios.get(url);
 let Moviess=axiosResponse.data;
   let lala=Moviess.results.map(item=>{
       return new Movieee(item.title,item.vote_average,item.vote_count,item.popularity,item.release_date);
    })
console.log(lala)
  res.status(200).json(lala)
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