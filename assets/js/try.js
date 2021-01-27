var option = prompt("which operation you want \n1.Addition\n2.subtraction\n3.multiplication\n4.division\n5.Max\n6.Min\n7.Average\n8.Square")
var numbers = new Array()

function maximum() {
    if(option == 5){
        var operationNumber = prompt("how many number you wanna operate?")
        for(let i = 0; i < parseInt(operationNumber);i++){
            numbers[i] = prompt("Enter number " +(i + 1))
            var max;
            var tempMax = parseInt(numbers[0])
            if(tempMax > parseInt(numbers[i+1])){
                tempMax = parseInt(numbers[0])
            }else{
                tempMax = parseInt[i+1]
            }
        }
        return tempMax
    }
}

;(function(){
    if(option == 5){
        console.log(add())
    }else{
        console.log("you didn't choose in range")
    } 
    
})();