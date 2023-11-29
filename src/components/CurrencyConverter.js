import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const exchangeRate = 75; // Replace with the current exchange rate

  const convertCurrency = () => {
    let convertedAmount;
    if (fromCurrency === 'USD' && toCurrency === 'INR') {
      convertedAmount = amount * exchangeRate;
    } else if (fromCurrency === 'INR' && toCurrency === 'USD') {
      convertedAmount = amount / exchangeRate;
    } else {
      // Handle other currency conversions if needed
      console.error('Unsupported currency conversion');
      return;
    }

    alert(`Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </div>
      <div>
        <label>From:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          {/* Add more currency options if needed */}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          {/* Add more currency options if needed */}
        </select>
      </div>
      <div>
        <button onClick={convertCurrency}>Convert</button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
