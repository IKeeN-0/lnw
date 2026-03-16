require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];                // ดึงข้อมูลจาก Header ที่ชื่อว่า 'authorization'
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){           // ตรวจสอบว่ามี Header นี้ส่งมาไหม และขึ้นต้นด้วยคำว่า "Bearer "
        return res.status(401).json({message: "Unauthorized"})      // ไม่มี หรือรูปแบบผิด ให้ส่ง Error 401 (ไม่ได้รับอนุญาต)
    };

    const token = authHeader.split(' ')[1];                         // แยกเอาเฉพาะตัว Token ออกมา

    if (!token) return res.status(401).json({message: "No Token"}); // ตรวจสอบอีกครั้งว่ามีตัว Token อยู่จริงไหม

    jwt.verify(token, SECRET_KEY, (err, user) => {                  // ใช้ฟังก์ชันของ jwt เพื่อตรวจสอบว่า Token นี้ถูกสร้างมาจาก Secret Key ของเราจริงและยังไม่หมดอายุ
        if (err) return res.status(403).json({message: "Forbidden"});// ถ้า Token ปลอม, ถูกแก้ไข หรือหมดอายุ (err จะมีค่า) ให้ส่ง Error 403
        req.user = user;                                            // ถ้าถูกต้อง นำข้อมูลผู้ใช้ที่ถอดรหัสจาก Token ได้ ไปใส่ไว้ใน object req (เพื่อให้ API ถัดไปใช้งานได้)
        next();
    });
};

module.exports = authenticateToken;             // ส่งออกฟังก์ชันนี้เพื่อให้ไฟล์อื่นในโปรเจกต์ดึงไปใช้งานได้