// Vercel serverless function for /api/current-workout
import currentWorkoutRoutes from '../server/routes/currentWorkout.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(currentWorkoutRoutes);

export default app;
