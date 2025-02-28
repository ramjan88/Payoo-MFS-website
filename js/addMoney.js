document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let amount = document.getElementById("amount").value;
    let convertedAmount = parseFloat(amount);

    let pin = document.getElementById("pin").value;
    let convertedPin = parseInt(pin);

    let mainBalance = document.getElementById("main-balance").innerText;
    let convertedMainBalance = parseFloat(mainBalance);

    // simple methood
    // if (convertedPin === 1234) {
    //   let sum = convertedMainBalance + convertedAmount;
    //   document.getElementById("main-balance").innerText = sum;
    // } else {
    //   console.log("pin tik nai ha");
    // }

    // good methood
    if (amount) {
      if (convertedPin === 1234) {
        let sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
     
      } else {
        alert("Enter valid pin");
      }
    } else {
      alert("Enter Amount");
    }
  });
