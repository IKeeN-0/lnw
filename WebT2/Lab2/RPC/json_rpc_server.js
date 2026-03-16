const jayson = require('jayson');

const server = jayson.server({
  toggleSmartLight: function(args, callback) {      // callback: คือฟังก์ชันที่ใช้ส่งคำตอบกลับไปหา Client โดยมีรูปแบบคือ callback(error, result)
    const roomName = args[0];
    const brightness = args[1];

    callback(null, `Light in ${roomName} set to ${brightness}%`);     // null = ไม่มีข้อผิดพลาด
  }
});

server.http().listen(8000, () => {
  console.log("JSON-RPC Server running on port 8000");
});