

//prompt for user input
// length of password
// character types: lowercase
// character types: uppercase
// character types: numbers


function generatePassword() {
    var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChars =["!", "@", "#", "$", "%", "^", "*","'" , "=" , "-", "_"];

    console.log(specialChars.length);

    fullArray = [];

    var passLength = 0

do {
    var passLength =  prompt("How many characters do you want for your password? please pick a number from 8 to 128");
    var charNums = parseInt(passLength);
    }
   
    while(charNums<8 || charNums>128); 

    var useUpper = confirm("Do you want any Uppercase letters?");
        if (useUpper) {
        fullArray=fullArray.concat(upperCase);
        console.log(fullArray);
    }
    
    var useLower = confirm("Do you want any lowercase letters?");
        if (useLower) {
        fullArray=fullArray.concat(lowerCase);
        console.log(fullArray);
    }
    
    var useSpecial = confirm("Would you like to use special characters?");
        if(useSpecial) {
            fullArray=fullArray.concat(specialChars);
            console.log(fullArray);
        }

    var useNumbers = confirm("Would you like to use Numbers?");
        if(useNumbers) {
            fullArray = fullArray.concat(numbers);
            console.log(fullArray);
        }
    
    var newPassword = "";

    for(var i =0; i < passLength; i++){
        var randomNum = Math.floor(Math.random() * (fullArray.length-1));
        var randomChar = fullArray[randomNum];
        newPassword+=randomChar;
    }

    return newPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



