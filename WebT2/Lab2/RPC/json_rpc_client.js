const jayson = require('jayson');
const client = jayson.client.http({ port: 8000 });

console.log("--- Smart Home Controller Active ---");

const params = ['Living Room', 75];  //ใส่ roomName กับ brightness 

client.request('toggleSmartLight', params, (err, response) => {         // (err, response) => { ... }: คือ Callback function ที่จะทำงานเมื่อได้รับคำตอบกลับมาจาก Server
  if (err) {
    return console.error(err);
  }

  console.log("Response from House:", response.result);
});