// pages/api/ip.js
export default function GET(req, res) {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;
    res.status(200).json({ ip });
  }
  