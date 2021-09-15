'use strict'
const axios=require("axios");


let handleMovie= async (req,res)=>{
    let loc = req.query.country_code.toLocaleUpperCase();
    let url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&region=${loc}`;
    let axiosResponse= await axios.get(url);
 let Moviess=axiosResponse.data;
   let lala=Moviess.results.map(item=>{
       return new Movieee(item.original_title,item.average_votes,item.average_votes,item.total_votes,item.popularity,item.released_on);
    })
console.log(lala)
  res.status(200).json(lala)
}
class Movieee{
    constructor(title,average_votes,total_votes,popularity,released_on){
        this.title=title;
        this.average_votes=average_votes;
        this.total_votes=total_votes;
        this.popularity=popularity;
        this.released_on=released_on
        
    }
}












module.exports=handleMovie