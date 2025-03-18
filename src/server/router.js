
import express from 'express';
import { loginRoute } from './routes/LoginRoute.js';


const router = express.Router()

router.post('/login', loginRoute)


export default router;