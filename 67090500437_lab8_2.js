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

checkInventory("")  //ใส่ input ใน " "
.then(msg => console.log(msg))
.catch(err => console.log(err));