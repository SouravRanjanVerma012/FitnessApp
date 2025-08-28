import workoutRoutes from '../server/routes/workouts.js';

export default async function handler(req, res) {
  if (req.method === 'GET' || req.method === 'POST') {
    return workoutRoutes(req, res);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
