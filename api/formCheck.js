// Vercel serverless function for /api/form-check
import formCheckRoutes from '../server/routes/formCheck.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(formCheckRoutes);

export default app;
