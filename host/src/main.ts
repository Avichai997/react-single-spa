import { registerApplication, start } from 'single-spa';

// Dynamically import MFE modules at runtime, completely bypassing Vite's
// static analysis and transform pipeline.  The browser's native import map
// (injected by vite-plugin-single-spa) resolves the bare specifiers.
const loadMfe = new Function('n', 'return import(n)') as (name: string) => Promise<any>;

registerApplication({
  name: '@chkp/sidebar',
  app: () => loadMfe('@chkp/sidebar'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@chkp/page1',
  app: () => loadMfe('@chkp/page1'),
  activeWhen: ['/page1'],
});

registerApplication({
  name: '@chkp/page2',
  app: () => loadMfe('@chkp/page2'),
  activeWhen: ['/page2'],
});

start({ urlRerouteOnly: true });
