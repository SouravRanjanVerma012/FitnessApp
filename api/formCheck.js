import formCheckRoutes from '../server/routes/formCheck.js';

export default async function handler(req, res) {
  if (req.method === 'GET' || req.method === 'POST') {
    return formCheckRoutes(req, res);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
