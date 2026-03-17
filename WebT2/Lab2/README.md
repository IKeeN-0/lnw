## gRPC install
<ul>
  <li>1. ติดตั้ง</li>
</ul>

```
npm install @grpc/grpc-js @grpc/proto-loader
```
<ul>
  <li>2. ทำไฟล์ .proto</li>
</ul>

## RPC
<ul>
  <li>1. ติดตั้ง</li>
</ul>

```
npm install jayson
```

## json
<ul>
  <li>1. ติดตั้ง</li>
</ul>

```
npm install express jsonapi-serializer
```
<ul>
  <li>2. โครงสร้างไฟล์</li>
</ul>

```
├── server.js
├── serializers/
│   └── user.serializer.js
└── package.json
```

<ul>
  <li>3. รันด้วย</li>
</ul>

```
node server.js
```

## องค์ประกอบ .proto
<ul>
  <li>1. ระบุเวอร์ชันที่ใช้ (แนะนำ proto3 เพราะเป็นมาตรฐานปัจจุบัน)</li>
  <li>2. กำหนด Package เพื่อป้องกันชื่อซ้ำ</li>
  <li>3. นิยาม Service (เหมือนการรวบรวม Endpoint ของ API)</li>
  <li>// rpc [ชื่อฟังก์ชัน] ([ข้อมูลที่ผู้ใช้ส่งไป]) returns ([ข้อมูลที่เซิฟเวอร์ตอบกลับ]);</li>
  <li>rpc GetToy (ToyRequest) returns (ToyResponse);</li>
  <li>rpc CreateToy (ToyInput) returns (ToyResponse);</li>
  <li>4. นิยาม Message (โครงสร้างข้อมูล)(เป็นตัว [ข้อมูลที่ผู้ใช้ส่งไป] กับ [ข้อมูลที่เซิฟเวอร์ตอบกลับ] )</li>
</ul>
