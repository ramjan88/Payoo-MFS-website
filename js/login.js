document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let accountNumber = document.getElementById("Account-number").value;

    let pin = document.getElementById("pin").value;
    let convertedPin = parseInt(pin);

    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Enter correct pin");
      }
    } else {
      alert("Enter correct Number");
    }
  });
