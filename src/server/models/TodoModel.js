import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    completed : {
        type: Boolean,
        default: false
    }
}); 

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;