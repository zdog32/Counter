function count(){
    number = number + 1;
    updateNumber();
}
function uncount(){
    number = number - 1;
    updateNumber();
}
function square(){
    number = number * number;
    updateNumber();
}
function reset(){
    number = 0;
    updateNumber();
}
function half(){
    number = number / 2;
    updateNumber();
}
function updateNumber(){
    code.innerHTML = number;
    document.cookie = "number="+number;
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
var displayNumber = document.querySelector("#displayNumber");
var number = Number(getCookie("number"));
if (!number || isNaN(number)){
    number = 0;
}
var code = document.querySelector("#number");
code.innerHTML = number;

