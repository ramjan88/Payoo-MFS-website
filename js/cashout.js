document
  .getElementById("btn-cashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cashoutAmount = document.getElementById("cashout-amount").value;
    let convertedCashoutAmount = parseFloat(cashoutAmount);

    let pin = document.getElementById("cashout-pin").value;
    let convertedPin = parseInt(pin);

    let mainBalance = document.getElementById("main-balance").innerText;
    let convertedMainBalance = parseFloat(mainBalance);

    if (cashoutAmount) {
      if (convertedPin === 1234) {
        let difference = convertedMainBalance - convertedCashoutAmount;
        document.getElementById("main-balance").innerText = difference;
      } else {
        alert("Enter valid pin");
      }
    } else {
      alert("Enter Amount");
    }
  });
