//Variable declarations
var email = document.getElementById('Email').value;
var password = document.getElementById('Password').value;
var submit = document.getElementById('submit');

var logged = {
    email: email.value,
    password: password.value
}

submit.onclick = ()=>{
    if (email.value === " " && password.value === " ") {
        alert('pls fill the correct input');
    }
    else{
        alert('Login successful')
    }

    // alert(email);

}


    var objectarray = [];
    var button = document.getElementById("clickMe");

    function addToArray() {
       var customerobject = {};
      customerobject.email = document.getElementById("email").value;
      customerobject.password = document.getElementById("password").value;
     
      objectarray.push(customerobject);
      console.log(objectarray);
    }
   


