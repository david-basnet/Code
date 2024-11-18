//letting total of 3 steps while filling form for purchasing in cart page 
let currentStep = 1;
const totalStep = 3;
// value not inserted while filling the form will be shown as none 
function nextStep() {
  event.preventDefault();
  if (validateStep(currentStep)) {
    document.getElementById("step-" + currentStep).style.display = "none";
    //letting previous and next button work properly
    if (currentStep < totalStep) {

      currentStep++;
      document.getElementById("step-" + currentStep).style.display = "block";
    }
  }
}
function previousStep() {
  event.preventDefault();
  document.getElementById("step-" + currentStep).style.display = "none";

  if (currentStep > 1) {
    currentStep--;
    document.getElementById("step-" + currentStep).style.display = "block";
  }
}

function validateStep(step) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var printerModel = document.getElementById("printer-model").value;
  var quantity = document.getElementById("quantity").value;
  //not inserting value in given form will led to the alert given below 
  if (step == 1) {
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    if (address == "") {
      alert("Please enter your address");
      return false;
    }
    if (email == "") {
      alert("Please enter your email");
      return false;
    }

  } else if (step == 2) {
    if (printerModel == "") {
      alert("Please select your printer Model");
      return false;
    }
    else if (quantity == "") {
      alert("Please select Quantity");
      return false;
    }
    else {
      document.getElementById("summary-name").innerHTML = name;
      document.getElementById("summary-email").innerHTML = email;
      document.getElementById("summary-address").innerHTML = address;
      document.getElementById("summary-printer-model").innerHTML = printerModel;
      document.getElementById("summary-quantity").innerHTML = quantity;
    }
  }
  else if (step == 3) {
    //pop-up message for sucessfully purchasing products 
    alert("Successfully Purchased !!");

  }
  return true;
}


