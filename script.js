function validateForm() {

var name = document.getElementById("name").value;

if(name == ""){
alert("Please enter your name");
return false;
}

alert("Form submitted successfully");
return true;

}