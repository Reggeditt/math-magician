import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [output, setOutput] = useState('0');
  const [result, setResult] = useState({ total: null, next: null, operation: null });

  const getButtonName = (e) => {
    const buttonName = e.target.textContent;
    setResult(calculate(result, buttonName));
  };

  React.useEffect(() => {
    setOutput(result.next || result.operation || result.total || '0');
  }, [result]);
  return (
    <div className="calculator-wrap">
      <div className="calculator-display">{output}</div>
      <div className="calculator-keypads">
        <button className="key1" type="button" onClick={getButtonName}>AC</button>
        <button className="key2" type="button" onClick={getButtonName}>+/-</button>
        <button className="key3" type="button" onClick={getButtonName}>%</button>
        <button className="key4" type="button" onClick={getButtonName}>&#247;</button>
        <button className="key5" type="button" onClick={getButtonName}>7</button>
        <button type="button" onClick={getButtonName}>8</button>
        <button type="button" onClick={getButtonName}>9</button>
        <button className="key8" type="button" onClick={getButtonName}>x</button>
        <button type="button" onClick={getButtonName}>4</button>
        <button type="button" onClick={getButtonName}>5</button>
        <button type="button" onClick={getButtonName}>6</button>
        <button className="key12" type="button" onClick={getButtonName}>-</button>
        <button type="button" onClick={getButtonName}>1</button>
        <button type="button" onClick={getButtonName}>2</button>
        <button type="button" onClick={getButtonName}>3</button>
        <button className="key12" type="button" onClick={getButtonName}>+</button>
        <button className="key17" type="button" onClick={getButtonName}>0</button>
        <button type="button" onClick={getButtonName}>.</button>
        <button className="key19" type="button" onClick={getButtonName}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
