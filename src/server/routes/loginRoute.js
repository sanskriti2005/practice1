import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

export const loginRoute = (req, res) => {
    if(req.body.password == process.env.PASSWORD){
        const token = jwt.sign({
            userId: 1
        }, process.env.SECRET);
        res.json(token);
    } else{
        res.send('fuck you too');
    }
    
}