## ติดตั้งlib
<ul>
  <li>
    ถ้าไม่มี package.json
  </li>
</ul>

```
npm init -y
```

<ul>
  <li>
    ติดตั้ง library
  </li>
</ul>

```
npm install express swagger-ui-express yamljs
```

<ul>
  <li>
    รัน app.js
  </li>
</ul>

```
node app.js
```

<ul>
  <li>
    เปิด swagger ด้วยลิงก์ "docs" ที่ตั้งไว้ใน app.js  
  </li>
</ul>

## status code
### 2** success
<ul>
  <li>200 OK          แสดงว่าการร้องขอสำเร็จ [get / put / delete]</li>
  <li>201 Created     ใช้เฉพาะกับการสร้างข้อมูลใหม่ [post]</li>
  <li>204 No Content  คำร้องขอสำเร็จ แต่ไม่มีข้อมูลใดๆ ที่จะต้องส่งกลับไปให้ [delete / put]</li>
</ul>

### 4** client error
<ul>
  <li>400 Bad Request         เซิร์ฟเวอร์ไม่สามารถประมวลผลได้ เนื่องจากการส่งข้อมูลหรือคำร้องขอที่ผิดพลาดจากฝั่งผู้ใช้งาน</li>
  <li>401 Unauthorized        ผู้ใช้งานยังไม่ได้ยืนยันตัวตน []</li>
  <li>403 Forbidden           ผู้ใช้งานยืนยันตัวตนแล้ว แต่ไม่มีสิทธิ์</li>
  <li>404 Not Found           ไม่พบข้อมูลหรือทรัพยากรที่ร้องขอ</li>
  <li>405 Method Not Allowed  มี Endpoint นั้นอยู่จริง แต่ผู้ใช้งานเรียกใช้ HTTP Method ที่ระบบไม่รองรับ</li>
  <li>429 Too Many Requests   ผู้ใช้งานส่งคำร้องขอเข้ามามากเกินไปในช่วงเวลาหนึ่ง</li>
</ul>

### 5** server error
<ul>
  <li>500 Internal Server Error   เกิดข้อผิดพลาดทั่วไปหรือเหตุการณ์ที่ไม่คาดคิดขึ้นภายในเซิร์ฟเวอร์</li>
  <li>502 Bad Gateway             เซิร์ฟเวอร์ที่ทำหน้าที่เป็นตัวกลาง (Gateway/Proxy) ได้รับการตอบกลับที่ผิดปกติจากเซิร์ฟเวอร์หลัก</li>
  <li>503 Service Unavailable     เซิร์ฟเวอร์ไม่สามารถให้บริการได้ในขณะนั้น</li>
  <li>504 Gateway Timeout         เซิร์ฟเวอร์ที่เป็นตัวกลางรอการตอบกลับจากเซิร์ฟเวอร์หลักนานเกินไปจนหมดเวลา</li>
</ul
