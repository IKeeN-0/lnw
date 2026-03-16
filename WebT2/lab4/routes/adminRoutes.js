const authenticateToken = require('../middlewares/authenticate');
const checkAdmin = require('../middlewares/authorize');

module.exports = (app) => {
    app.get("/admin-only", authenticateToken, checkAdmin, (req, res) => {       // สร้าง Route แบบ GET ที่ URL "/admin-only" เช็คว่าคุณล็อกอินหรือยัง? เช็คว่าเป็น Admin หรือเปล่า?
        res.json({ message: "Hello, ADMIN." });
    });
};