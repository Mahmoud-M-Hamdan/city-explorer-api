'use strict'
const axios=require("axios");


let handleMovie= async (req,res)=>{
    let loc = req.query.country_code.toLocaleUpperCase();
    let url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&region=${loc}`;
    let axiosResponse= await axios.get(url);
 let Moviess=axiosResponse.data;
   let lala=Moviess.results.map(item=>{
       return new Movieee(item.original_title);
    })
console.log(lala)
  res.status(200).json(lala)
}
class Movieee{
    constructor(title){
        this.title=title;
        
    }
}











module.exports=handleMovie