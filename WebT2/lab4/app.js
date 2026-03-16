require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT;                                  // ดึงหมายเลข Port จากไฟล์ .env
const SECRET_KEY = process.env.JWT_SECRET;                      // ดึงคีย์ความลับสำหรับเซ็นชื่อ Token จากไฟล์ .env

const app = express();
app.use(express.json());
require('./routes/adminRoutes')(app);                           // นำไฟล์ adminRoutes (ที่เราเพิ่งคุยกันก่อนหน้า) มาใช้งาน โดยส่งตัวแปร app เข้าไปเพื่อให้ไฟล์นั้นรู้จักและสร้าง Route เพิ่มได้

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