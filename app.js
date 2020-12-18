const loan = document.querySelector("#loan");
const interest = document.querySelector("#interest");
const calculate = document.querySelector("#calculate");
const period = document.querySelector("#years");
const monthlyPayment = document.querySelector("#monthlyPayment");
const totalPayment = document.querySelector("#totalPayment");
const accured = document.querySelector("#accured");

calculate.addEventListener("click", loanMath);

function loanMath(e) {
  e.preventDefault();
  console.log("clicked");
  const principal = parseFloat(loan.value);
  const interestRate = parseFloat(interest.value) / 100 / 12;
  const paymentPeriods = parseFloat(period.value) * 12;

  //Calculate Monthly Payment
  // Equation: monthly = p* r (1+rate)^n /(1+r)^2 -1
  //https://www.sitepoint.com/javascript-interest-loan-calculator-algorithm/
  const x = Math.pow(1 + interestRate, paymentPeriods);
  const monthly = (principal * interestRate * x) / (x - 1);
  const totalNew = (monthly * paymentPeriods).toFixed(2);
  const totalAccured = (monthly * paymentPeriods - principal).toFixed(2);
  //Appending variable Results to DOM
  monthlyPayment.innerHTML = `${monthly.toFixed(2)}`;
  totalPayment.innerHTML = `${totalNew}`;
  accured.innerHTML = `${totalAccured}`;
}
