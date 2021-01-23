var option = prompt("which operation you want \n1.Addition\n2.subtraction\n3.multiplication\n4.division\n5.Max\n6.Min\n7.Average\n8.Square")
var numbers = new Array()

function add() {
    if(option == 1){
        var operationNumber = prompt("how many number you wanna operate?")
        var sum = 0
        for(let i = 0; i < parseInt(operationNumber);i++){
            numbers[i] = prompt("Enter number " +(i + 1))
            sum = sum + parseInt(numbers[i])
        }
        return sum
    }
}
function multilpay(){
    if(option == 3){
        var product = 1;
        var operationNumber = prompt("how many number you wanna operate?")
        for(let i = 0; i < parseInt(operationNumber); i++){
            numbers[i] = prompt("Enter number " + (i + 1))
            product = product * numbers[i]
        }
        return product
    }
}
function subtraction(){
    if(option == 2){
        var num1 = prompt("Enter first number")
        var num2 = prompt("Enter second number")
        return num1 - num2
    }
}
function division(){
    var decision;
    if(option == 4){
        var num1 = prompt("Enter first number");
        var num2 = prompt("Enter second number")
        if(num2 != 0){
            decision =  (num1/num2).toFixed(2)
        }else{
            decision = "Denomenator Can't be zero!!!.."
        }
        return decision
    }
}
function maximum(){
    if(option == 5){
        var num1 = prompt("Enter first number");
        var num2 = prompt("Enter second number");

        return Math.max(num1,num2)
    }
}
function minimum(){
    if(option == 6){
        var num1 = prompt("Enter first number");
        var num2 = prompt("Enter second number");

        return Math.min(num1,num2)
    }
}
function Average(){
    if(option == 7){
        var num1 = prompt("Enter first number");
        var num2 = prompt("Enter second number");

        return (parseInt(num1) + parseInt(num2))/2
    }
}
function Square(){
    if(option == 8){
        var num1 = prompt("Enter number");
        return Math.pow(num1,2)
    }
}
    
;(function(){
    console.log(add())
    console.log(multilpay())
    console.log(subtraction())
    console.log(division())
    console.log(maximum())
    console.log(minimum())
    console.log(Square())
    console.log(Average())
})();



