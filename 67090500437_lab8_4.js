function fetchData(){
    console.log("Fetching Data...");
    return Promise.resolve('Data 1');
}

function processData(data){
    console.log(`Processing: ${data}`);
    return Promise.resolve(data + ' processed');
}

async function fetch() {
    const data1 = await fetchData();
    const finalData = await processData(data1);
    return console.log('Result:', finalData);
}

fetch();
