import { json } from 'express';
import authRoutes from '../server/routes/auth.js';

export default async function handler(req, res) {
  if (req.method === 'POST' && req.url === '/api/auth/login') {
    return authRoutes(req, res);
  } else if (req.method === 'POST' && req.url === '/api/auth/register') {
    return authRoutes(req, res);
  } else if (req.method === 'GET' && req.url === '/api/auth/me') {
    return authRoutes(req, res);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
