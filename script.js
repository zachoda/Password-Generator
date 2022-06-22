// Assignment code here
function generatePassword() {
const specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
const numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let fullPassword = "";  
var length = parseInt(window.prompt("How many characters would you like your password to be?"));
console.log(length);
if (length < 8 || length > 128) {
  window.alert("Password must be between 8 and 128 characters. Please select a different number!");
  return generatePassword;
};
var specCharacterConfirm = window.confirm ("Would you like there to be special characters in your password?");
console.log(specCharacterConfirm);
if (specCharacterConfirm) {
fullPassword += specialCharacter
} 
var numberConfirm = window.confirm ("Would you like there to be numbers in your password?");
console.log (numberConfirm);
if (numberConfirm) {
// add in characters 0123456789
fullPassword += numericalCharacter
} 
var lowerCaseConfirm = window.confirm ("Would you like your password to contain lowercase letters?");
console.log (lowerCaseConfirm);
if (lowerCaseConfirm) {
  // add in characters abcdefghijklmnopqrstuvwxyz
  fullPassword += lowercaseCharacter
} 
var upperCaseConfirm = window.confirm ("Would you like your password to contain uppercase letters?");
console.log (upperCaseConfirm);
if (upperCaseConfirm) {
  //add in characters ABCDEFGHIJKLMNOPQRSTUVWXYZ
  fullPassword += uppercaseCharacter
} 
 if (upperCaseConfirm===false && lowerCaseConfirm===false && specCharacterConfirm===false && numberConfirm===false){
  window.alert("You must choose at least one character style. Please try again!!");
 } else {
  //return fullPassword;
  //pwLength += length;
  //console.log(pwLength);
  createPassword();
 }

 console.log(fullPassword);
function createPassword() {
var result = ""
for ( var i = 0; i <= length.value; i++ ) {
  //result += specialCharacter+=lowercaseCharacter+=numericalCharacter+=uppercaseCharacter
  result =(Math.floor(Math.random() * fullPassword.length));
  console.log(result)
  return result;
}
}
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
