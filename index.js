const express = require('express');
const { response } = require('express');
const app = express()
const port = process.env.PORT || 80
app.listen(port,() => console.log(`You are listening at ${port}`))
app.use(express.static('public'));
app.use(express.json());
const fetch = require("node-fetch");

rSources = ["fox-news","the-wall-street-journal","breitbart-news","the-washington-post","independent","cnn","the-huffington-post","vice-news"]
lSources = ["independent","cnn","the-huffington-post","vice-news"]
articles={}


app.get('/api/rNews', async (req,res)=>{
    data = await getData()
    res.json({
        allData: await data
    })
})


async function getData() {
    for (source of rSources){
        try{
            let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=7f6a7e3fd3bb4d189f3e41bcf694f841`)
            let data = await response.json()
            source = source.split("-").join("")
            console.log(source)
            articles[source] = await data.articles[0]
            


        }catch(e){ 
            console.log(e)}
    }
    return articles
}