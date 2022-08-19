// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // console.log('testing button');

  // prompt user for password criteria - length 8-128, lowecase, uppercase, special char
  var length = prompt('How long would you like your password to be? Please select a number between 8-128');

  // alert
  if (length < 8) {
    window.alert('Please select a number between 8 and 128');
    return
  } else if (length > 128) {
    window.alert('Please select a number between 8 and 128');
    return
  } else {
    console.log('Thank You');
  }
  // confirm criteria
  var confirmSpecialChar = window.confirm('Confirm Special Characters?');
  var confirmNum = window.confirm('Confirm Numbers?');
  var confirmLower = window.confirm('Confirm Lower Case Letters?');
  var confirmUpper = window.confirm('Confirm Upper Case Letters?');

  // setup character strings to be comfirmed and randomized. 
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", ".", "<", ">", "/", "?"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // store options
  var storeOptions = [];

  // random password
  var randomPassword = "";


  // generate password




  // display password to page
  return 'Generated password...'
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
