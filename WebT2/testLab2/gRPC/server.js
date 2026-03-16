const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'monitor.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const tempProto = grpc.loadPackageDefinition(packageDefinition).temperature;

// Implementation of the RPC methods
const getCurrentTemperature = (call, callback) => {
    const response = {
        value: (Math.random() * (30 - 20) + 20).toFixed(2),
        unit: "Celsius",
        timestamp: new Date().toLocaleTimeString()
    };
    callback(null, response); 
};

const streamTemperatures = (call) => {
    console.log("Client connected for streaming...");
    
    const interval = setInterval(() => {
        const response = {
            value: (Math.random() * (35 - 25) + 25).toFixed(2),
            unit: "Celsius",
            timestamp: new Date().toLocaleTimeString()
        };
        call.write(response);
    }, 1000);

    call.on('cancelled', () => {
        console.log("Streaming cancelled by client.");
        clearInterval(interval);
    });
};

function main() {
    const server = new grpc.Server();
    server.addService(tempProto.TemperatureService.service, {
        getCurrentTemperature: getCurrentTemperature,
        streamTemperatures: streamTemperatures
    });
    
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) return console.error(err);
        console.log(`Server running at http://0.0.0.0:${port}`);
        server.start();
    });
}

main();