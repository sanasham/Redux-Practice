import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6'>
      <div>
        <img
          src='https://redux.js.org/img/redux.svg'
          alt='Redux Logo'
          className='w-24 h-24'
        />
      </div>
      <div className='flex items-center space-x-4'>
        <button
          className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold'
          type='button'
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <span className='text-2xl font-semibold w-10 text-center'>{count}</span>
        <button
          className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold'
          type='button'
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button type='button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
