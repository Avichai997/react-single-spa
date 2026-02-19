import React, { useState } from 'react';
import './index.css';

export default function Root() {
  const [text, setText] = useState('');

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-emerald-700 mb-4">Page 200</h1>
      <p className="text-gray-600 mb-6">
        This is <strong>Page 2</strong> micro-frontend, built with{' '}
        <span className="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded">
          Webpack + React
        </span>.
      </p>

      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-3">Echo Input</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-4"
        />
        {text && (
          <p className="text-emerald-600 text-lg">
            You typed: <strong>{text}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
