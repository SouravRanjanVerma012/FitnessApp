// Vercel serverless function for /api/workouts
import workoutRoutes from '../server/routes/workouts.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(workoutRoutes);

export default app;
