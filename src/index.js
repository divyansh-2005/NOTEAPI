const express = require("express");
const app = express();
// const quotes = require("./quotes.json");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose")


dotenv.config();
// console.log("SECRET_KEY:",process.env.SECRET_KEY);
// console.log("Mongo_URL:", process.env.MONGO_URL);



app.use(express.json())

//Middleware example

// app.use((req,res,next)=>{
//     console.log("HTTP Method - " + req.method + " ,URL - " + req.url);
//     next();
// })
app.use(cors())

app.use('/users',userRouter)
app.use('/note',noteRouter)

app.get("/",(req,res)=>{
    res.send("Notes API")
})



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port "+PORT);
    })
    console.log("connected to mongodb");
})
.catch((error)=>{
    console.error("mongodb error:",error);
})


