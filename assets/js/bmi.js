var weight;
var height;
var result;
var decision;

weight = prompt("Enter your weight")
height = prompt("Enter your height")

let tempWeight = Number(weight);
let tempHeight = Number(height)
let calcBmi = function(tempWeight,tempHeight){
    if(isNaN(tempWeight) || isNaN(tempHeight) || tempHeight <= 0 || tempWeight < 0){
       result = "Input is Invalid" 
    }else{
        result = (tempWeight / Math.pow(tempHeight,2)).toFixed(2)
    }
    return result
}
var BMI = calcBmi(tempWeight,tempHeight)
if(BMI < 18){
    decision = "Underweight"
}else if(BMI < 24.9 && BMI >18){
    decision = "Normal or healthy weight"
}else if(BMI < 24.9 && BMI < 29.9){
    decision = "Overweight"
}else if(BMI > 24.9){
    decision = "Obese"
}else{
    decision = ""
}
(function(){
    console.log("BMI is: " + BMI + decision) 
})()
