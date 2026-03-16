const jayson = require('jayson');

const server = jayson.server({
  getCurrentTemperature: function(args, callback) {
    const temp = (Math.random() * (30 - 20) + 20).toFixed(2);
    callback(null, { value: temp, unit: "Celsius", timestamp: new Date().toLocaleTimeString() });
  }
});

server.http().listen(3000, () => {
  console.log("JSON-RPC Server running on port 3000");
});