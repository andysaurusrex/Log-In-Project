document.getElementById('logIn').onclick =
//Function that initializes click of login button
function validate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var valid = false;
  var invalid = true;

  var unArray = ["andysaurusrex", "bobthebanana", "nightwing"];
  var pwArray = ["andy123", "Bobtastic", "dickgrayson"];

  for ( var i=0; i <unArray.length; i++){
    if ((username == unArray[i]) && (password == pwArray[i])){
      valid = true;
    }
  }

  if (valid){
    alert ("Login was successful");
  }

  else if (invalid) {
    alert ("Invalid username or password");
  }
};
