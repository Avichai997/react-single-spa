import React, { useState } from 'react';
import './index.css';

export default function Page3() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Page 3</h1>
      <p className="text-gray-600 mb-6">
        This is <strong>Page 3</strong> micro-frontend, built with{' '}
        <span className="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded">
          Webpack + React 16
        </span>.
      </p>

      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-3">Counter</h2>
        <p className="text-purple-600 text-2xl font-bold mb-4">{count}</p>
        <div className="flex gap-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
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

      <p className="mt-4 text-sm text-gray-400">
        React version: {React.version}
      </p>
    </div>
  );
}
