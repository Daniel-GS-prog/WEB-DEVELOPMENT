
//Password length validation
function verifyPassword() {

  // Getting input for password
  var pw = document.getElementById("psw").value;

  // Checking length
    if(pw.length !== 11) {
      alert("Incorrect Password. The length must be 11 characters");
        } else {
      alert("Log in successful! Welcome to Juan's Mexican Street Food!");
      }
    }


// Calculating total to pay
function totalPrice(){

  // initialising variables:
  var size = document.getElementById("size").value;
  var amount = document.getElementById('amount').value;
  var d = document.getElementById('disc').value;
  var price ;
  var burrito;

  //  Assigning a value for prce depending on size:
  // Burrito variable is only for display message
  if (size == 1) {
    price = 5;
    burrito = "large burrito";

  } else if (size == 2) {
    price = 7.5;
    burrito = "Extra-large burrito";

  }else {
    price = 17;
    burrito = "Supersize burrito";
  }

  // Calculating total to pay:
  var total = amount * price;

  // Checking for discount:
  if (d == "mextexgood") {
    document.getElementById("result").innerHTML = "Valid discount";
    total = total * 0.865;
  }else {
    document.getElementById("result").innerHTML = "Sorry. Invalid discount code";
  }

  // Displaying final message with total to pay:
  document.getElementById("order").innerHTML = "Your order is: " + " " + amount +" " + burrito;
  document.getElementById("total").innerHTML = "Your total is: " + "€" + total ;

}

// Displaying health & safety concerns for supersize option
function supersize(option){
  if (option) {
    var size = document.getElementById("size").value;
    if (size == 3){
      alert("This size raises health & safety concerns");
    }
  }
}

// End.
