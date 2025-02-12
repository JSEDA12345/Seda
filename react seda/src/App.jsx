import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  // State
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // operations
  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 === 0 ? 'Cannot divide by 0' : n1 / n2;
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Mobile App</h1>
      <h1 className="text-xl font-semibold">Activty 1</h1>
      <h1 className="text-2xl">Counter App</h1>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>

      {/*Calculator*/}
      <div className="flex flex-col items-center gap-4 mt-8">
      <h2 className="text-xl font-semibold">Activity 2</h2>
        <h2 className="text-xl font-semibold">Basic Calculator</h2>
        <div className="flex gap-2">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter number 1"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter number 2"
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => calculate('+')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +
          </button>
          <button
            onClick={() => calculate('-')}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => calculate('*')}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            *
          </button>
          <button
            onClick={() => calculate('/')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            /
          </button>
        </div>
        <p className="text-xl mt-4">Result: {result}</p>
      </div>
    </div>
  );
}

export default App;
