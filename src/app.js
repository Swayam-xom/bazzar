const express = require("express")

const app = express()

/* POST / notes */
app.post("/notes",(req,res)=>{

     console.log(req.body)

})

module.exports = app