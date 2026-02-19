import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(_err: Error) {
    return <div className="p-4 text-red-600">Page 3 failed to load.</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
