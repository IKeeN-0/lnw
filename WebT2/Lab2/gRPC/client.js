const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'monitor.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const cryptoProto = grpc.loadPackageDefinition(packageDefinition).crypto;

const client = new cryptoProto.CryptoService(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

console.log("\n--- Starting Server Streaming ---");
const call = client.streamPrices({});               // Client ทำการเรียกฟังก์ชัน streamPrices ไปยัง Server โดยส่ง Object ว่าง {}
call.on('data', (response) => {                     // Event Listener ที่จะทำงาน ทุกครั้ง ที่ Server ยิงข้อมูลใหม่มา
    console.log(`Current BTC Price: $${response.value.toFixed(2)}`);
});

call.on('error', (err) => {
    console.error("Stream Error:", err);
});

call.on('end', () => {
    console.log("Stream ended.");
});