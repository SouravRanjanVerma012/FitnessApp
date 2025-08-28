import workoutPlanRoutes from '../server/routes/workoutPlans.js';

export default async function handler(req, res) {
  if (req.method === 'GET' || req.method === 'POST') {
    return workoutPlanRoutes(req, res);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
