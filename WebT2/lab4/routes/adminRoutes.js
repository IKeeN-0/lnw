const authenticateToken = require('../middlewares/authenticate');
const checkAdmin = require('../middlewares/authorize');

module.exports = (app) => {
    app.get("/admin-only", authenticateToken, checkAdmin, (req, res) => {
        res.json({ message: "Hello, ADMIN." });
    });
};