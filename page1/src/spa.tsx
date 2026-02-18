import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';
import './index.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(_err: Error) {
    return <div className="p-4 text-red-600">Page 1 failed to load.</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
