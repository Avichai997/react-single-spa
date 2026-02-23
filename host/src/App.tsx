import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { RegisterMfes } from '@/applications/setup';
import { applications } from './applications/mfeConfig';
import { MfeContainer } from './components/MfeContainer';

export const App = () => {
  const registeredRef = useRef(false);

  useEffect(() => {
    if (registeredRef.current) return;
    registeredRef.current = true;

    RegisterMfes();
  }, []);

  return (
    <>
      {applications.map(({ name, container }) => (
        <MfeContainer key={name} name={name} container={container} />
      ))}
      <Outlet />
    </>
  );
};