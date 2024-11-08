let count = 0;
document.getElementById("calculate").addEventListener("click", function () {
  count++;
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  if (income <= 0) {
    showElementById("income-error");
    return;
  }

  if (software <= 0) {
    showElementById("software-error");
    return;
  }

  if (courses <= 0) {
    showElementById("courses-error");
    return;
  }

  if (internet <= 0) {
    showElementById("internet-error");
    return;
  }

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if (totalExpenses > balance) {
    showElementById("logic-error");
    return;
  }

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  showElementById("results");

  const historyContainer = document.getElementById("history-list");
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white border-l-4 rounded-md p-4 border-blue-400";
  historyItem.innerHTML = `
    <p class="text-xs text-gray-900">Serial: ${count}</p>
    <p class="text-xs text-gray-900">${new Date().toLocaleDateString()}</p>
    <p class="font-bold text-base text-gray-900">Income: ${totalExpenses.toFixed(
      2
    )}</p>
    <p class="text-xs text-gray-900">Expenses: ${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-900">Balance: ${balance.toFixed(2)}</p>

    `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const savingPercentage = getInputValueById("savings");

    const income = getInputValueById("income");
    const software = getInputValueById("software");
    const courses = getInputValueById("courses");
    const internet = getInputValueById("internet");

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (balance * savingPercentage) / 100;
    const remainingBalance = balance - savingAmount;

    const savingElement = document.getElementById("savings-amount");
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = remainingBalance.toFixed(2);
  });

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

document.getElementById("history-tab").addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  assistantTab.classList.add("text-gray-600");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  hideElementById("expense-form");
  showElementById("history-section");
});

document.getElementById("assistant-tab").addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  showElementById("expense-form");
  hideElementById("history-section");
});

document.getElementById("income").addEventListener("input", function () {
  const inputValue = getInputValueById("income");
  if (inputValue <= 0) {
    showElementById("income-error");
  } else {
    hideElementById("income-error");
  }
});
