function checkInventory(itemName){
    const item = itemName;
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(item === 'Laptop')
            resolve("In stock");
        else
            reject("Out of stock");
        }, 500);
    })
}