function CreateBankAccount(initialBalance){
    let balance = initialBalance;
    function getBalance(){
        return balance;
    }
    function deposit(amount){
        balance += amount;
    }
    function withdraw(amount){
        if(amount > balance){
            console.log("Cannot withdraw cause balance not enough.")
            return;
        }
        balance -= amount;
    }
    return {
        getBalance,
        deposit,
        withdraw
    };
}

const myAcc = CreateBankAccount(1000);
myAcc.getBalance();

myAcc.deposit(1000);
myAcc.getBalance();

myAcc.withdraw(5000);
myAcc.getBalance();

myAcc.withdraw(200);
myAcc.getBalance();