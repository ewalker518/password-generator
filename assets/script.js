var includeLowercase
var includeUppercase
var includeNumbers
var includeSymbols

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "/", "<", ">", "?", "+", "-", "_", "="];

var choices

var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var includeLowercase = window.confirm("Would you like your password to contain lowercase letters?");
  var includeUppercase = window.confirm("Would you like your password to contain uppercase letters?");
  var includeNumbers = window.confirm("Would you like your password to contain numbers?");
  var includeSymbols = window.confirm("Would you like your password to include special characters? e.g. ! < # % & @ $ /")

  // if they say no to everything, tell them they done goofed
  if (!includeLowercase && !includeUppercase && !includeSymbols && !includeNumbers) {
    alert("You need to select at least one criteria");
    writePassword();
  }

  var passwordLength = parseInt(window.prompt("How many characters would you like your password to contain? Choose between 8 and 128")) // change data type for passwordLength to integer

    // Conditional statement to check that the user inputs a valid number
    while (passwordLength <8 || passwordLength >128) {
      passwordLength = prompt("The number of characters needs to be between 8 and 128");
    }

    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (Number.isNaN(passwordLength)) {
    alert("Password length must be provided as a number");
    return null;
    }

    if (includeLowercase && includeUppercase && includeNumbers && includeSymbols) {
      choices = lowercase.concat(uppercase, numbers, symbols);
    } else if (includeUppercase && includeNumbers && includeSymbols) {
      choices = uppercase.concat(numbers, symbols);
    } else if (includeLowercase && includeNumbers && includeSymbols) {
      choices = lowercase.concat(numbers, symbols);
    } else if (includeUppercase && includeLowercase && includeSymbols) {
      choices = uppercase.concat(lowercase, symbols);
    } else if (includeUppercase && includeLowercase && includeNumbers) {
      choices = uppercase.concat(lowercase, numbers);
    } else if (includeUppercase && includeNumbers) {
      choices = uppercase.concat(numbers);
    } else if (includeUppercase && includeSymbols) {
      choices = uppercase.concat(symbols);
    } else if (includeUppercase && includeLowercase) {
      choices = uppercase.concat(lowercase);
    } else if (includeLowercase && includeNumbers) {
      choices = lowercase.concat(numbers);
    } else if (includeLowercase && includeSymbols) {
      choices = lowercase.concat(symbols);
    } else if (includeNumbers && includeSymbols) {
      choices = numbers.concat(symbols);
    } else if (includeUppercase) {
      choices = (uppercase);
    } else if (includeLowercase) {
      choices = (lowercase);
    } else if (includeNumbers) {
      choices = (numbers);
    } else { choices = (symbols); }
    console.log(choices);
    
    var createPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      createPassword += choices[Math.floor(Math.random() * choices.length)];
    }
  var passwordText = document.querySelector("#password");
  passwordText.value = createPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
