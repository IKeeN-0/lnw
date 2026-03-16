const jayson = require('jayson');
const client = jayson.client.http({ port: 3000 });

console.log("--- Starting Polling (Standard RPC) ---");

setInterval(() => {
  client.request('getCurrentTemperature', [], (err, response) => {
    if (err) return console.error(err);
    const res = response.result;
    console.log(`Polling Update: ${res.value} ${res.unit} [${res.timestamp}]`);
  });
}, 1000);