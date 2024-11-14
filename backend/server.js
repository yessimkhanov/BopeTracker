import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import pregnancyDataRoutes from './routes/pregnancyDataRoutes.js';
import { query } from './db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/pregnancy', pregnancyDataRoutes);

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));