const deposit=document.getElementById("deposit");
const newDepositAmount=document.getElementById("newDeposit");
const balance=document.getElementById("balance");


const depositButton=document.getElementById("depositButton");

depositButton.addEventListener("click",()=>{
    const depositText=parseInt(deposit.innerText);
    const depositAmountValue=parseInt(newDepositAmount.value);
    const currentDeposit=depositText+depositAmountValue;
    deposit.innerText=currentDeposit;
    newDepositAmount.value="";
    updateBalance(depositAmountValue,1);
   
})

const updateBalance=(Amount,isDeposit)=>{
    const previousBalance=parseInt(balance.innerText);
    if(isDeposit){
        const currentBalance=previousBalance+Amount;
        balance.innerText= currentBalance;
    }
    else{
        const currentBalance=previousBalance-Amount; 
        balance.innerText= currentBalance;
    }
    

}
const Withdraw= document.getElementById("Withdraw");
const withdrawAmount=document.getElementById("newWithdraw");

const withdrawButton=document.getElementById("withdrawButton");
withdrawButton.addEventListener("click",()=>{
    const withdrawText=parseInt(Withdraw.innerText);
    const WithdrawAmountValue=parseInt(withdrawAmount.value);
    const currentWithdraw=withdrawText+WithdrawAmountValue;
    Withdraw.innerText=currentWithdraw;
    withdrawAmount.value="";
    updateBalance(WithdrawAmountValue,0);
   
})