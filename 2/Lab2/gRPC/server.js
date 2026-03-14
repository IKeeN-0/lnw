const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'monitor.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const cryptoProto = grpc.loadPackageDefinition(packageDefinition).crypto;

function streamPrices(call) {
    console.log("Client connected. Starting price stream...");

    const interval = setInterval(() => {
        const priceUpdate = {
            symbol: "BTC",
            value: parseFloat((Math.random() * (50000 - 45000) + 45000).toFixed(2)),
            timestamp: new Date().toLocaleTimeString()
        };

        call.write(priceUpdate);
    }, 500);

    call.on('cancelled', () => {
        clearInterval(interval);
        console.log("Client disconnected.");
    });
}

function main(){
    const server = new grpc.Server();
    server.addService(cryptoProto.CryptoService.service, { streamPrices: streamPrices });

    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) return console.error(err);
        console.log(`gRPC Crypto Server running at http://0.0.0.0:${port}`);
        server.start();
    });
}

main();