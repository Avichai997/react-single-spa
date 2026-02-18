import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Page 1</h1>
      <p className="text-gray-600 mb-6">
        This is <strong>Page 1</strong> micro-frontend, built with{' '}
        <span className="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded">Vite + React</span>.
      </p>

      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-3">Interactive Counter</h2>
        <p className="text-4xl font-bold text-indigo-600 mb-4">{count}</p>
        <div className="flex gap-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
