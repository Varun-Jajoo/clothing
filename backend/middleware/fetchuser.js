// middleware/fetchuser.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'varun';

const fetchuser = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ error: 'Access Denied' });
  }

  try {
    // Verify and decode the token
    const data = jwt.verify(token, JWT_SECRET);

    // Assign the user ID to the request object
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid Token' });
  }
};

module.exports = fetchuser;
