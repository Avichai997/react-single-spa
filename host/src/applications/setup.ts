import { LifeCycles, registerApplication, start } from 'single-spa';

import { applications } from '@/applications/mfeConfig';

export const createLoader = () =>
  new Function('n', 'return import(n)') as (name: string) => Promise<LifeCycles>;

export const RegisterMfes = (): void => {
  const loader = createLoader();

  for (const { name, activeWhen } of applications) {
    registerApplication({
      name,
      app: () => loader(name),
      activeWhen,
      customProps: {
        domElementGetter: () => document.getElementById(`single-spa-application:${name}`),
      },
    });
  }

  // Start after a microtask to ensure DOM is ready
  Promise.resolve().then(() => start({ urlRerouteOnly: true }));
};
