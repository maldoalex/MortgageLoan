document.getElementById("btnSubmit").addEventListener("click", monthlyPayment);

  let amount = document.getElementById("amount");
  let term = document.getElementById("term");
  let rate = document.getElementById("rate");
  let monthlyPayment = document.getElementById("monthlyPayment");
  let interestPayment = document.getElementById("interestPayment");
  let principalPayment = document.getElementById("principalPayment");
  let remainingBalance = document.getElementById("remainingBalance");


  //get user inputs, convert to monthly rate and total number of payments
  let principal = parseFloat(amount.value);
  let interest = parseFloat(rate.value) / 1200;
  let payments = parseFloat(term.value) * 12;

  //calculate the monthly payment

  let monthly = (principal * Math.pow(1 + interest, payments) * interest) / (x - 1);

  payment.innerHTML = monthly.toFixed(2);
  principalPayment.innerHTML = (monthly * payments).toFixed(2);
  interestPayment.innerHTML = ((monthly*payments)-principal).toFixed(2);
  

// mortgagePayment = monthlyPayment(amount, term, rate);

// function monthlyPayment(amount, term, rate) {
//  amount * rate * (Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
 
// }