
import express from 'express';
import { loginRoute } from './routes/LoginRoute.js';
import { getTodosRoute } from './routes/getTodosRoute.js';


const router = express.Router()

router.post('/login', loginRoute);
// todo routes
router.get('/todos', getTodosRoute);


export default router;