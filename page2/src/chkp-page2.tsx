import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(_err: Error) {
    return <div className="p-4 text-red-600">Page 2 failed to load.</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
