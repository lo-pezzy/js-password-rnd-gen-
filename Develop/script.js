// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
  var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  // introducing all possible characters & symbols ^
  var passwordArr = "";
  var passwordArray = [];
  var finalPassword = [];
  var passwordLength = parseInt(prompt("How long do you want your password?"));
  console.log(passwordLength);
  if (passwordLength > 8 && passwordLength < 128) {
    console.log("password is valid");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmSymbol = confirm("Do you want symbols?");
    var confirmNumber = confirm("Do you want numbers?");
    // Establishing prompts to be answered
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
    console.log(passwordArr);

    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * passwordArr.length);
      console.log(random);
      console.log(passwordArray);
      finalPassword.push(passwordArr[random]);
    }
    finalPassword = finalPassword.join("");
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
