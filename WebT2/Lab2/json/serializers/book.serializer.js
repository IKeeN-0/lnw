const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const BookSerializer = new JSONAPISerializer('books', {         // สร้าง Instance ใหม่ชื่อ BookSerializer โดยกำหนดชื่อประเภทของทรัพยากร (Resource Type) เป็น 'books'

  attributes: ['title', 'isbn', 'author'],                      // ฟิลด์ไหนบ้างจากข้อมูลต้นฉบับที่จะให้ปรากฏในส่วน attributes
  
  topLevelLinks: {                                              // กำหนดลิงก์ที่อยู่บนสุดของ JSON response
    self: 'http://localhost:8000/api/books'
  },
  dataLinks: {                                                  // กำหนดลิงก์สำหรับข้อมูล แต่ละรายการ โดยใช้ฟังก์ชันดึง id จากข้อมูลตัวนั้นๆ มาสร้างเป็น URL เฉพาะตัว
    self: (data) => `http://localhost:8000/api/books/${data.id}`
  }
});

module.exports = BookSerializer;