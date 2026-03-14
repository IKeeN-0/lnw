require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT;
const SECRET_KEY = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
require('./routes/adminRoutes')(app);

app.post('/login', (req,res) => {
    const {username} = req.body;
    
    const payload = {
        username: username,
        role: username === "admin" ? "admin" : "user"
    };

    const options = {
        expiresIn: "1h"
    };

    const token = jwt.sign(payload, SECRET_KEY, options);

    res.json({token, message: "Login successful"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port : http://localhost:${PORT}`);
});