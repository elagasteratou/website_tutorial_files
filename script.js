// var fs = require('fs');

// fs.appendFile('mysecondfile.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

console.log("hi from JS")
// function V1
// function validateForm() {
//     if(
//         document.getElementById("firstName").value.length > 0 &&
//         document.getElementById("lastName").value.length > 0 &&
//         document.getElementById("email").value.length > 0 &&
//         document.getElementById("email").validity.valid  
//     ){
//         document.getElementById("errorMsg").innerHTML = "";
//         document.getElementById("submitFormBtn").disabled = false; 
//     } 
//     else{
//         document.getElementById("errorMsg").innerHTML = "Please fill in the form properly";
//         document.getElementById("submitFormBtn").disabled = true; 
//     }
// }
// function V2
function validateForm() {
    if (
        document.getElementById("firstName").value.length > 0 &&
        document.getElementById("lastName").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("email").validity.valid
    ) {
        document.getElementById("submitFormBtn").disabled = false;
        // document.getElementById("submitted").innerText = "Your form has been submited" 


    } else if (!document.getElementById("email").validity.valid) {
        document.getElementById("errorMsg").innerText = "Invalid email address";
    }
    else {
        document.getElementById("submitFormBtn").disabled = true;
    }
}
function submitForm() {
    alert("Your form has been submited")
}