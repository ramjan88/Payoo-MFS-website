//
// add money for main balance
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let accountNumber = document.getElementById("Account-number").value;
    let amount = getInputValueById("amount");
    let pin = getInputValueById("pin");
    let mainBalance = getInnerTextById("main-balance");

    if (amount < 0) {
      alert("Invalid Amount");
      return;
    }

    if (accountNumber.length === 11) {
      if (amount) {
        if (pin === 1234) {
          let sum = mainBalance + amount;
          setInnerTextByIdandValue("main-balance", sum);

          let transaction = document.getElementById("transaction-container");

          let p = document.createElement("p");
          p.innerText = `
          added ${amount} from ${accountNumber} account
          `;
          transaction.appendChild(p);
        } else {
          alert("incorrect pin");
        }
      } else {
        alert("Enter Amount");
      }
    } else {
      alert("Enter valid Number");
    }
  });

//
// cashout money for main balance
document
  .getElementById("btn-cashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let accountNumber = document.getElementById("cashout-number").value;
    let cashoutAmount = getInputValueById("cashout-amount");
    let pin = getInputValueById("cashout-pin");
    let mainBalance = getInnerTextById("main-balance");

    if (cashoutAmount > mainBalance) {
      alert("Invalid Amount");
      return;
    }

    if (accountNumber.length === 11) {
      if (amount) {
        if (pin === 1234) {
          let difference = mainBalance - cashoutAmount;
          setInnerTextByIdandValue("main-balance", difference);

          let transaction = document.getElementById("transaction-container");

          let p = document.createElement("p");
          p.innerText = `
          casout ${cashoutAmount} from ${accountNumber} this account
          `;
          transaction.appendChild(p);
        } else {
          alert("incorrect pin");
        }
      } else {
        alert("Enter Amount");
      }
    } else {
      alert("Enter valid Number");
    }
  });
