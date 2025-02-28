document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("transaction-history", "block");
    handleToggle("addMoney", "none");
    handleToggle("cashout", "none");
  });
