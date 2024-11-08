let count = 0;
document.getElementById("calculate").addEventListener("click", function () {
  count++;  
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const resultsField = document.getElementById("results");
  resultsField.classList.remove("hidden");

const historyContainer = document.getElementById('history-list');
const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

historyItem.innerHTML = `
<p>Serial: ${count}</p>
<p class="text-xs text-gray-900">${new Date().toLocaleDateString()}</p>
<p class="text-xs text-gray-900">Income: ${income.toFixed(2)}</p>
<p class="text-xs text-gray-900">Expenses: ${totalExpenses.toFixed(2)}</p>
<p class="text-xs text-gray-900">Balance: ${balance.toFixed(2)}</p>
`;

historyContainer.insertBefore(historyItem, historyContainer.firstChild);



});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const savingPercentage = parseFloat(
      document.getElementById("savings").value
    );

    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (balance * savingPercentage) / 100;

    const remainingBalance = balance - savingAmount;

    const savingElement = document.getElementById("savings-amount");
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = remainingBalance.toFixed(2);
  });


  document.getElementById('history-tab').addEventListener('click', function(){
        const historyTab = document.getElementById('history-tab');
        const assistantTab = document.getElementById('assistant-tab');
        historyTab.classList.add(
            'text-white', 
            'bg-gradient-to-r', 
            'from-blue-500', 
            'to-purple-600'
          );
          historyTab.classList.remove('text-gray-600')

          assistantTab.classList.remove(
            'text-white', 
            'bg-gradient-to-r', 
            'from-blue-500', 
            'to-purple-600'
          );
          assistantTab.classList.add('text-gray-600');

          document.getElementById('expense-form').classList.add('hidden');
          document.getElementById('history-section').classList.remove('hidden');



  })