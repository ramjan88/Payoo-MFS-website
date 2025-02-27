// login btn click and work
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let accountNumber = document.getElementById("Account-number").value;
    let pin = document.getElementById("pin").value;
    // pin string tai parseInt dea number koira nise
    let pinNumber = parseInt(pin);

    if (accountNumber.length === 11) {
      // console.log('right number');
      if (pinNumber === 1234) {
        // console.log('correct pin');
        window.location.href = "main.html";
      } else {
        console.log("incorrect pin");
        // console.log("incorrect pin");
      }
    } else {
      alert("incorrect number");
    }
  });
