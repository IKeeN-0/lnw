const express = require('express');
const db = require('./database');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {                            // ui หน้าเว็บเฉยๆ
    res.send(`                                              
        <h2>Login (Vulnerable System)</h2>
        <form method="POST" action="/login">
            Username: <input type="text" name="username"><br>
            Password: <input type="password" name="password"><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";

    /*  SQL Injection

        user: admin password: ' OR '1' = '1' ถ้าใส่มางี้ คำสั่งแรกจะกลายเป็น
        SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1' = '1';
        แปล หา user ชื่อ admin และ password เป็นช่องว่าง หรือ เมื่อ 1 = 1
        password มันทำให้ยังทำงานผ่าน
        และ
        user: admin' -- password: 1 ถ้าใส่มางี้ คำสั่งแรกจะกลายเป็น
        SELECT * FROM users WHERE username = 'admin' -- AND password = '1';
        -- คือการคอมเม้น ดังนั้นมันเชคแค่ user = admin

    */

    const query = "SELECT * FROM users WHERE username = ? AND password = ?";

    /* วิธี paramiterize 
        ? คือ parameter 
        ในโค้ดจะเอา ? ไปทำงาน


    */

    console.log("Executing Query: ", query);

    // db.get(query, (err, row) => {
    db.get(query, [username, password], (err, row) => {
        if (row) {
            res.send("<h1>Welcome back, " + row.username + "!</h1>");
        } else {
            res.send("<h1>Login Failed!</h1>");
        }
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));