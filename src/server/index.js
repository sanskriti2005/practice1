import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors"
import router from "./router.js";
import mongoose from "mongoose";

dotenv.config()
const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(router)
app.get('/todos', (req, res) => {
    res.send(process.env.SECRET)
})

// set up port for backend
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(8888, () => {
        console.log('app is running on port 8888')
    })
})
