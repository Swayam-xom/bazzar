const mongoose = require("mongoose")

 function connectToDb(){
    mongoose.connect(process.env.MONGOES_URI)
    .then(() => {
        console.log("connect to database")
    })
 }

module.exports = connectToDb