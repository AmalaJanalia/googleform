function validateform(){
  var f = document.gform.fname.value;
  var l = document.gform.lname.value;
  var pw = document.gform.pass.value;
  var cm = document.gform.cnfrm.value;
  if(f == null || f == "" || l == null || l == "") {
    alert("blank");
    return false;
  } 
  else if(pw.length < 6){
    alert("pwd should be >=6");
    return false;
  }
  if(pw == cm){
    return true;
  } 
  else {
    alert("password must be same!");
    return false;
  }
}

