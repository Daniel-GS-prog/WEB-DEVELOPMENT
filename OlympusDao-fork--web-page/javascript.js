// National College of Ireland
// Module: Web design and client scripting
// Author:
// Daniel Gonzalez, student number: 21111383


//funtion to simulate conection to wallet, verifies if its conected in order to continue
function connectWallet_1(){
  if(document.getElementById("connect").checked) {
    operation();
    }else {
    alert("You need to connect your wallet first");
  }
}
function connectWallet_2(){
  if(document.getElementById("connect").checked) {
    transfer();
    }else {
    alert("You need to connect your wallet first");
  }
}
function connected(){
  if(document.getElementById("connect").checked) {
    alert("You wallet is now connected")
  }else{
    alert("Your wallet is disconnected")
  }
}
//register operation in stake, reads the value and simulates staking or unstaking
function operation(){
  if (document.getElementById("stake").checked){
    var stakeQty = Number(document.getElementById("stakeQty").value);
    staked = stakeQty;
    document.getElementById("staked").value = staked;
    document.getElementById("unstaked").value = 0;
    alert("Staking operation will be registered in your wallet")
  }else if (document.getElementById("unstake").checked) {
    var stakeQty = Number(document.getElementById("stakeQty").value);
    unstaked = -stakeQty;
    document.getElementById("unstaked").value = unstaked;
    document.getElementById("staked").value = 0;
    alert("Unstaking operation will be registered in your wallet")
  }else {
    alert("Please select your operation");
  }
}
//reads options from user and compares if they are the different in order to transfer
function transfer(){
  var select_1 = document.getElementById("from");
  var option_1 = select_1.options[select_1.selectedIndex];
  var select_2 = document.getElementById("to");
  var option_2 = select_2.options[select_2.selectedIndex];
  if (option_2.value == option_1.value) {
    alert("You can't transfer to the same operator");
    }else {
      alert("Your transfer from " + option_1.value + " to " + option_2.value + " has been updated in your wallet");
  }
}
//alert for pages that need further development
function notAvailable(){
  alert ("Page in development");
}
//email validation
function validateEmail() {
  var mail = document.getElementById("emailito").value;
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/
  if(regx.test(mail)){
    return true;
  }else{
    alert ("email not valid");
    return false;
  }
}
