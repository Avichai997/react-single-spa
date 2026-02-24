import { useEffect, useMemo, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { RegisterMfes } from '@/applications/setup';

import { applications } from './applications/mfeConfig';
import { MfeContainer } from './components/MfeContainer';

export const App = () => {
  const registeredRef = useRef(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (registeredRef.current) return;
    registeredRef.current = true;
    RegisterMfes();
  }, []);

  const isActiveForPath = (activeWhen: string[], pathname: string) =>
    activeWhen.some((p) => (p === '/' ? true : pathname.startsWith(p)));

  const activeApps = useMemo(
    () => applications.filter((mfe) => isActiveForPath(mfe.activeWhen, pathname)),
    [pathname],
  );

  return (
    <>
      {activeApps.map(({ name, container }) => (
        <MfeContainer key={name} name={name} container={container} />
      ))}
      <Outlet />
    </>
  );
};
