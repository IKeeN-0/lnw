require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "Unauthorized"})
    };

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({message: "No Token"});

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({message: "Forbidden"});
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;