const CurrencyInput = ({
  className,
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyDisable = false,
  amountDisable = false,
  currencyOptions,
  selectedCurrency,
}) => {
  return (
    <div className='bg-blue-200 flex'>
      <div>
        <label htmlFor='input'>{label}</label>
        <input
          type='text'
          id='input'
          value={amount}
          placeholder='0'
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisable}
        />
      </div>
      <div>
        <p>Currency type</p>
        <select
          value={selectedCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }>
          {currencyOptions.map((option) => (
            <option
              value={option}
              key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default CurrencyInput;
