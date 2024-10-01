const header = document.getElementById("header");
const submitBtn = document.getElementById("submitBtn");

let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");

submitBtn.addEventListener("click", () => {alert("Welcome ${fname} ${lName}")});