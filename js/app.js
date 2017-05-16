var unArray = [];
var pwArray = [];

document.getElementById('logIn').onclick =
//Function that initializes click of login button
function validate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var valid = false;
  var invalid = true;
// array or usernames and passwords, fromt the z index of both, they are connected ex 1,1, 2,2, 3,3, they match with counterpart

// the function. the first checks the username array, the second checks the password array BOTH at once
  for ( var i=0; i <unArray.length; i++){
    if ((username == unArray[i]) && (password == pwArray[i])){
      // if the code above is true then it is VALID
      valid = true;
    }
  }
// if the credentials are both valid this messageg will trigger
  if (valid){
    alert ("Login was successful");
  }
// if the credentials are not valid(username or password) this message will trigger
  else if (invalid) {
    alert ("Invalid username or password");
  }

// This clears the input after the input has been submitted
document.getElementById("username").value = '';
document.getElementById('password').value = '';
};

document.getElementById('register').onclick =
function registerUser() {

unArray.push(document.getElementById('registerUn').value);
pwArray.push(document.getElementById('registerPw').value);

alert("Registration" + " successful!");

document.getElementById('registerUn').value = "";
document.getElementById('registerPw').value = "";


};
