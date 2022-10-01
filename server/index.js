const express=require("express")
const cors =require("cors");
const mongoose=require("mongoose")
const userRoutes =require('./routes/userRoutes') 

const app =express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// api calling routes
app.use('/api/auth/',userRoutes)

// database Con
mongoose.connect(process.env.MONGO_URL).then((res)=>{
console.log("connected to database")
}).catch((err)=>{
    console.log(err.message);
})

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${process.env.PORT}`)
})