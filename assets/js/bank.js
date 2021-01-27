 
 var dipos = 1000
 var choose = prompt("which service you want\n1.Diposit\n2.Withdrawal\n3.Balance\n4.Transfer")
 function diposit(){
     if(choose == 1){
         var inpuAmount = prompt("Enter your amount of input:")
         dipos = dipos + parseInt(inpuAmount)
     }
     return "your input is succed: " + parseInt(inpuAmount) + "\nYour current balance is:" + dipos
 }
 function Withdrawal(){
     if(choose == 2){
         var outputAmount = prompt("Enter your amount of output:")
         if(dipos > 50 && outputAmount < dipos){
            dipos = "Operation successful withdrawal:" + Number(outputAmount) + "\nYour remaning balance is " +Number(dipos - outputAmount) 
         }else{
             dipos = "your balance in insufficaint"
         }
     }
     return dipos
 }
 function balance(){
     if(choose == 3){
         return "your balance is: " + dipos
     }
 }
 function Transfer(){
    if(choose == 4){
        var cardNumber = prompt("Enter card number")
        if(isNaN(cardNumber) || cardNumber < 100000000000){
            dipos = "Invalid card number"
        }else{
            var transferAmount = prompt("Enter your amount you transfer:")
            if(dipos > 50 && transferAmount < dipos){
               dipos = "you transfer "+ transferAmount+" birr \nyour remaning balance is " + Number(dipos - transferAmount) 
            }else{
                dipos = "your balance in insufficaint"
            }
        }
    }
    return dipos
}
//  console.log(diposit())
//  console.log(Withdrawal())
 ;(function(){
     if(choose==1){
        console.log(diposit())
     }else if(choose == 2){
        console.log(Withdrawal())
     }else if(choose == 3){
        console.log(balance())
     }else if(choose==4){
        console.log(Transfer())
     }else{
         console.log("incorrect choose\nYour choose must be in range 1 to 4 both Inclusive")
     }  
 }());