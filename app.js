const loan = document.querySelector("#loan");
const interest = document.querySelector("#interest");
const calculate = document.querySelector("#calculate");
const period = document.querySelector("#years");

calculate.addEventListener("click", loanMath);

function loanMath(e) {
  e.preventDefault();
  console.log("clicked");
  const principal = parseFloat(loan.value);
  const interestRate = parseFloat(interest.value) / 100 / 12;
  const calcPeriod = parseFloat(period.value) * 12;

  //Calculate Monthly Payment
  // Equation: monthly = p* r (1+rate)^n /(1+r)^2 -1
  //https://www.sitepoint.com/javascript-interest-loan-calculator-algorithm/
  const x = Math.pow(1 + interestRate, calcPayments);
  const monthly = (principal * interestRate * x) / (x - 1);

  if (isFinite(mothly)) {
  }
  // Total Payment
  // Total Accrued Interest
}
