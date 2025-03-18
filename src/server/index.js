import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors"

dotenv.config()
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.get('/todos', (req, res) => {
    res.send(process.env.SECRET)
})

// set up port for backend
app.listen(8888)