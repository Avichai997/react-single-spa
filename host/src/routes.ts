import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from './App';
import { applications } from './applications/mfeConfig';

const EmptyRoute = () => null;

const childRoutes: RouteObject[] = applications.flatMap((mfe) =>
  mfe.activeWhen.map((path) => {
    if (path === '/') {
      return { index: true, Component: EmptyRoute };
    }

    return { path: `${path.replace('/', '')}/*`, Component: EmptyRoute };
  })
);

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: childRoutes,
  },
]);
