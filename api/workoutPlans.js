// Vercel serverless function for /api/workout-plans
import workoutPlanRoutes from '../server/routes/workoutPlans.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(workoutPlanRoutes);

export default app;
