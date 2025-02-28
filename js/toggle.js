//
// add money part and cashout part display none kora dea
document.getElementById("addMoney").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// show the add money and cashout filed
document.getElementById("add-money").addEventListener("click", function () {
  // document.getElementById("addMoney").style.display = "block";
  // document.getElementById("cashout").style.display = "none";
  handleToggle("transaction-history", "none");
  handleToggle("addMoney", "block");
  handleToggle("cashout", "none");
});

document.getElementById("cashout-money").addEventListener("click", function () {
  // document.getElementById("cashout").style.display = "block";
  // document.getElementById("addMoney").style.display = "none";
  handleToggle("transaction-history", "none");
  handleToggle("addMoney", "none");
  handleToggle("cashout", "block");
});

// document
//   .getElementById("transaction-box")
//   .addEventListener("click", function () {
//     handleToggle("transaction-history", "block");
//     handleToggle("addMoney", "none");
//     handleToggle("cashout", "none");
//   });
