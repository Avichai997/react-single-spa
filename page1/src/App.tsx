import { useState } from 'react';

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <div className='max-w-2xl'>
      <h1 className='mb-4 text-3xl font-bold text-indigo-700'>Page 1</h1>
      <p className='mb-6 text-gray-600'>
        This is <strong>Page 1</strong> micro-frontend, built with{' '}
        <span className='rounded bg-gray-100 px-1 py-0.5 font-mono text-sm'>Vite + React</span>.
      </p>

      <div className='rounded-lg border border-gray-200 bg-white p-6 shadow'>
        <h2 className='mb-3 text-lg font-semibold'>Interactive Counter</h2>
        <p className='mb-4 text-4xl font-bold text-indigo-600'>{count}</p>
        <div className='flex gap-3'>
          <button
            onClick={() => setCount((c) => c + 1)}
            className='rounded bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700'
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className='rounded bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
