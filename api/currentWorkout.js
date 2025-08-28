import currentWorkoutRoutes from '../server/routes/currentWorkout.js';

export default async function handler(req, res) {
  if (req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    return currentWorkoutRoutes(req, res);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
