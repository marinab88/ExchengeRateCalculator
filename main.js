//  API Information
const url = 'https://v6.exchangerate-api.com/v6/';
const apiKey = '0bea3d9a8340f1e72c49e3be';

// Page elements
const firstCurrency = document.getElementById("currency1");
const secondCurrency = document.getElementById("currency2");
const amount1 = document.getElementById("input1"); 
const amount2 = document.getElementById("input2");
const swapBtn = document.getElementById("swap");
const rate = document.getElementById("convert");

const calculator = () => {
  const val1 =firstCurrency.value;
  const val2 = secondCurrency.value;
  // Fetch exchange rates from API
  const urlToFetch = `${url}${apiKey}/latest/${val1}`;

  fetch(urlToFetch)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Display the values for both currencies
      // Update values on amount change
      const rateEl = data.conversion_rates[val2];
      rate.innerHTML = `1 ${val1} = ${rateEl} ${val2}`;
      amount2.value = (amount1.value * rateEl).toFixed(2);
    });
};

// Event Listeners
firstCurrency.addEventListener('change', calculator);
secondCurrency.addEventListener('change', calculator);
amount1.addEventListener('input', calculator);
amount2.addEventListener('input', calculator);
// Swap country rates
swapBtn.addEventListener('click', () => {
  const x = firstCurrency.value;
  firstCurrency.value = secondCurrency.value;
  secondCurrency.value = x;
  calculator();
})

calculator();
