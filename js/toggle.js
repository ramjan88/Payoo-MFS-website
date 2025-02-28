let addAmount = document.getElementById("addMoney");
addAmount.style.display = "none";

let cashoutAmount = document.getElementById("cashout");
cashoutAmount.style.display = "none";

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    document.getElementById("addMoney").style.display = "block";
    document.getElementById("cashout").style.display = "none";
  });

document
  .getElementById("cashout-money")
  .addEventListener("click", function (event) {
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("cashout").style.display = "block";
  });
