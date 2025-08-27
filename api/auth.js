// Vercel serverless function for /api/auth
import authRoutes from '../server/routes/auth.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(authRoutes);

export default app;
