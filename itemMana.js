function CreateItemManager(){
    let items = [];
    function addItem(item){
        if(item){
            if(!items.includes(item)){
                items.push(item);
                console.log('Item added.');
            }else{
                console.log('This item already exists.');
            }
        }
    }
    function removeItem(item){
        if(item){
            const index = items.indexOf(item);
            if(index !== -1){
                items.splice(index, 1);
                console.log('Item removed.');
            }else{
                console.log('Item not found.');
            }
        }
    }
    function listItem(){
        return items;
    }
    return{
        addItem,
        removeItem,
        listItem
    };
}

let myItem = CreateItemManager();
myItem.addItem("a");
myItem.addItem("b");
myItem.addItem("c");
myItem.addItem("d");
myItem.addItem("e");

myItem.addItem("a");

myItem.listItem();

myItem.removeItemItem("a");
myItem.removeItemItem("d");

myItem.removeItemItem("a");

myItem.listItem();

