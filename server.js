//Write a small Expressjs server that when the main / page is visited, return the current time and the number of visitors to the page
const express = require("express");
const app = express();
let count = 0;

app.get("/",function(req,res){
    const currentTime = new Date().toTimeString()
    count +=1;
    res.send({
        currentTime,
        count,
    })

})

app.listen(3000, function(){
    console.log("You listen on port 3000");
})

