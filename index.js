import express from "express"
import mongoose from "mongoose" 
import userRouter from "./routers/userRouter.js"
import jwt from "jsonwebtoken"
import authenticateUser from "./middlewares/authenticatioin.js"
import productRouter from "./routers/productRouter.js"


const app = express()

const mongodbURI = "mongodb+srv://asiru:1234@cluster0.ftcmwyh.mongodb.net/icomputers?appName=Cluster0"
mongoose.connect(mongodbURI).then(()=>{
    console.log("Connected to MongoDB")
})

app.use(express.json())

app.use(authenticateUser)
 
  

app.use("/users",userRouter)
app.use("/products",productRouter)


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
 
    