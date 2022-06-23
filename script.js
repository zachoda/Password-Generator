// Assignment code here
//const specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var generateBtn = document.querySelector("#generate"); 
var specialCharacter = "!@#$*();',."
var numericalCharacter = "0123456789"
var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var fullPassword = "";
function generatePassword() {
  var length = prompt("How many characters would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters. Please select a different number!");
    return generatePassword();
  } else {

    var specCharacterConfirm = confirm("Would you like there to be special characters in your password?");
    console.log(specCharacterConfirm);
    //if (specCharacterConfirm) {
    //fullPassword = fullPassword + specialCharacter

    var numberConfirm = confirm("Would you like there to be numbers in your password?");
    console.log(numberConfirm);
    //if (numberConfirm) {
    // add in characters 0123456789
    //fullPassword += numericalCharacter

    var lowerCaseConfirm = confirm("Would you like your password to contain lowercase letters?");
    console.log(lowerCaseConfirm);
    //if (lowerCaseConfirm) {
    // add in characters abcdefghijklmnopqrstuvwxyz
    //fullPassword += lowercaseCharacter

    var upperCaseConfirm = confirm("Would you like your password to contain uppercase letters?");
    console.log(upperCaseConfirm);
    //if (upperCaseConfirm) {
    //add in characters ABCDEFGHIJKLMNOPQRSTUVWXYZ
    //fullPassword += uppercaseCharacter
  }
  if (upperCaseConfirm === false && lowerCaseConfirm === false && specCharacterConfirm === false && numberConfirm === false) {
    alert("You must choose at least one character style. Please try again!!");
    {
      generatePassword();
    }
  }



if (specCharacterConfirm) {
  fullPassword = fullPassword + specialCharacter;
}

if (numberConfirm) {
  // add in characters 0123456789
  fullPassword = fullPassword + numericalCharacter;
}

if (lowerCaseConfirm) {
  // add in characters abcdefghijklmnopqrstuvwxyz
  fullPassword= fullPassword + lowercaseCharacter;
}

if (upperCaseConfirm) {
  //add in characters ABCDEFGHIJKLMNOPQRSTUVWXYZ
  fullPassword = fullPassword + uppercaseCharacter;
}
var result1 = ""
for (var i = 0; i <= length; i++) {
  result1 += fullPassword.charAt(Math.floor(Math.random() * fullPassword.length - 3))
  console.log(result1)
};

return result1; 
};
// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
