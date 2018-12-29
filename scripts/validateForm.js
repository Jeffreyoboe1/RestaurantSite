/*
Creator: Jeffrey S. Padgett
Date Created: Dec. 29, 2018
Date modified:
*/

function isEmail() {
var email = document.getElementById("email").value;
  if (email.indexOf("@") == -1) {
    alert("false! no @ sign");
    return false;
  }

  alert("submitted");
  return true;

}
