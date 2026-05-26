<ul>
  <li>ถ้าไม่มี package.json</li>
</ul>

```
npm init -y
```

<ul>
  <li>เมื่อมีไฟล์ package.json</li>
</ul>

```
npm install
```

<ul>
  <li>1. ติดตั้งตัวจัดการ (CLI) ของ Prisma เวอร์ชัน 5</li>
</ul>

```
npm install prisma@5 --save-dev
```

<ul>
  <li>2. ติดตั้งพร้อมกับตัว CLI</li>
</ul>

```
npm install @prisma/client@5
```

<ul>
  <li>3. สร้างโฟลเดอร์ prisma อัตโนมัติ</li>
</ul>

```
npx prisma init
```

<ul>
  <li>ถ้าติด error *** สักอย่าง มาใช้</li>
</ul>

```
npm install -g prisma
```

```สำรอง
prisma init
```

<ul>
  <li>4. จัดการไฟล์ .env แก้ไข DATABASE_URL</li>
</ul>

<ul>
  <li>5. จัดการไฟล์ schema.prisma ออกแบบตาราง (Model)</li>
</ul>

<ul>
  <li>6. สั่งให้ Prisma เอาแบบร่างที่เราเขียน ไปสร้างตารางในฐานข้อมูลจริง</li>
</ul>

```
npx prisma migrate dev --name init
```

<ul>
  <li>ใช้สำหรับตรวจดูว่า db จริงเก็บไรหรือเป็นยังไง</li>
</ul>

```
npx prisma studio
```

```
npm install
```
