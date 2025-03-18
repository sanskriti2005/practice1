
import dotenv from "dotenv"
import TodoModel from "../models/TodoModel.js"

dotenv.config()

export const getTodosRoute = async (req, res) => {
    const Todos = await TodoModel.find()
    res.json(Todos)
}