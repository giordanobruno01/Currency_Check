function convertCurrency(){
const apiKey = '9039b76cbb46c22ee2e4ab12';

// Prompt the user for the current currency and the currency to be converted
const currentCurrency = document.getElementById("fromCurrency").value;
const targetCurrency = document.getElementById("toCurrency").value;

// Construct the API URL
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currentCurrency}`;

// Make the HTTP request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Check if the API request was successful
    if (data.result === 'success') {
      // Extract the conversion rate from the API response
      const conversionRate = data.conversion_rates[targetCurrency];
    

      // Prompt the user for the amount to be converted
      const amount = document.getElementById("amount").value;

      // Perform the currency conversion
      const convertedAmount = amount * conversionRate;

      // Display the converted amount
     

        document.getElementById("result").innerHTML = convertedAmount + " " + targetCurrency;
        document.getElementById("dataString").innerHTML = data.conversion_rates[targetCurrency];

    } else {
        document.getElementById("result").innerHTML = "Wrong "
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });}