 const app = require('./src/aap');
 const mongoose = require("mongoose")

 function connectToDb(){
    mongoose.connect("mongodb+srv://soniswayam91_db_user:HYLyHeaTAaI0h8rm@cluster0.umfybea.mongodb.net/day-1")
    .then(() => {
        console.log("connect to database")
    })
 }

connectToDb()

 app.listen(3000, () => {
    console.log("server is running on port 3000")
 })