let personalProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligableToVote: false,
    familyMember: [],
    weight:"",
    height:"",
    ageCalc: function(){ return new Date().getFullYear() - this.birthYear},
    checkVote: function(){
        if(this.ageCalc() >= 18){this.isEligableToVote = true}else{this.isEligableToVote = false}
    },
    calcBmi: function(){
        return Number(this.weight / Math.pow(this.height,2))
    }
}


personalProfile.firstName = prompt("Enter your first name")
personalProfile.lastName = prompt("Enter your last name")
personalProfile.job = prompt("what is your job")
personalProfile.birthYear = prompt("Enter your birth day")
personalProfile.weight = prompt("Enter weight? ")
personalProfile.height = prompt("Enter your height in meter?")
let familyNumber = prompt("Enter your family number:")

for(let i = 0; i < parseInt(familyNumber); i++){
    personalProfile.familyMember[i] = prompt("Enter family number "+(i+1))
}


(function(){
    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personalProfile.firstName + " " + personalProfile.lastName);
    console.log("Profession : " + personalProfile.job);
    console.log("Age : " + personalProfile.ageCalc() + " " + "years old");
    console.log("Is Eligible to Vote : " + personalProfile.isEligableToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personalProfile.familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    // call bmi calculator 
    console.log("BMI is: " + personalProfile.calcBmi())
})()

