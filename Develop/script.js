// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
  var symbols = "!@#$%^&*";
  var numbers = "0123456789";

  var passwordArr = "";
  var passwordLength = prompt("How long do you want your password?");
  console.log(passwordLength);
  if (passwordLength > 8 && passwordLength < 128) {
    console.log("password is valid");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmSymbol = confirm("Do you want symbols?");
    var confirmNumber = confirm("Do you want numbers?");
    console.log(confirmLower, confirmUpper, confirmSymbol, confirmNumber);
    if (confirmLower) {
      passwordArr += lowerLetters;
    }
    if (confirmUpper) {
      passwordArr += upperLetters;
    }
    if (confirmSymbol) {
      passwordArr += symbols;
    }
    if (confirmNumber) {
      passwordArr += numbers;
    }
    console.log(passwordArr)
    var finalPassword = ""
    


    return finalPassword;
  } else {
    alert("password is not valid");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);