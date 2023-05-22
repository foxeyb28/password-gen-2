// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = prompt("how many charaters for password");
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password length must be 8-128 charaters")
    return "please try again"
  }
  var lower = confirm("would you like lowercase");
  var upper = confirm("would you like upper");
  var number = confirm("would you like number");
  var character = confirm("would you like charater");
  console.log(lower, upper, number, character)

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if ("passwordLength < 8 || passwordLength > 128", "lower", "upper", "number", "charater") {
  alert("Your Secured Password")
  
  myInput = document.getElementById("psw");
  letter = document.getElementById("letter");
  capital = document.getElementById("capital");
  number = document.getElementById("number");
  length = document.getElementById("length");
  
}



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
