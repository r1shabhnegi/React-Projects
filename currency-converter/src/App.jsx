import { useState } from 'react';

import useCurrencyInfo from './hooks/useCurrencyInfo';
import CurrencyInput from './CurrencyInput';

const App = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const data = useCurrencyInfo(from);

  const options = Object.keys(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConvertedAmount((amount * data[to]).toFixed(2));
  };

  return (
    <>
      <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
        <div className='bg-red-200 w-1/4 h-3/5 rounded-lg flex justify-center items-center flex-col'>
          <form onSubmit={handleSubmit}>
            <CurrencyInput
              label='from'
              amount={amount}
              onAmountChange={(currency) => setAmount(currency)}
              currencyOptions={options}
              selectedCurrency={from}
              onCurrencyChange={(from) => setFrom(from)}
            />
            <div>swap</div>
            <CurrencyInput
              label='to'
              amount={convertedAmount}
              currencyOptions={options}
              selectedCurrency={to}
              onCurrencyChange={(to) => setTo(to)}
              amountDisable
            />
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default App;
