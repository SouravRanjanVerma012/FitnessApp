export default function handler(req, res) {
  res.status(200).json({
    status: 'OK',
    message: 'FitForge Buddy API is running!',
    environment: process.env.NODE_ENV || 'development'
  });
}
