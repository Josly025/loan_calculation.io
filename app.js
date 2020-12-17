const loan = document.querySelector("#loan");
const interest = document.querySelector("#interest");
const calculate = document.querySelector("#calculate");
const years = document.querySelector("#years");

calculate.addEventListener("click", loanMath);

function loanMath(e) {
  e.preventDefault();
  console.log("clicked");
}
