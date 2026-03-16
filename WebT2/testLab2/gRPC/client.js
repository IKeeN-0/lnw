const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'monitor.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const tempProto = grpc.loadPackageDefinition(packageDefinition).temperature;

function main() {
    const client = new tempProto.TemperatureService(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );

    console.log("--- Calling Unary RPC ---");
    client.getCurrentTemperature({}, (err, response) => {
        if (err) return console.error(err);
        console.log(`Current Temp: ${response.value} ${response.unit} at ${response.timestamp}`);
        
        startStreaming(client);
    });
}

function startStreaming(client) {
    console.log("\n--- Starting Server Streaming ---");
    const call = client.streamTemperatures({});

    call.on('data', (response) => {
        console.log(`Live Update: ${response.value} ${response.unit} [${response.timestamp}]`);
    });

    call.on('error', (err) => {
        console.error("Stream Error:", err);
    });

    call.on('end', () => {
        console.log("Stream ended.");
    });
}

main();