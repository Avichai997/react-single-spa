import { createPortal } from 'react-dom';

interface IMfeContainerProps {
  name: string;
  container: string;
}

export const MfeContainer = ({ name, container }: IMfeContainerProps) => {
  const id = `single-spa-application:${name}`;
  const parentEl = document.getElementById(container);

  if (!parentEl) {
    throw new Error(`Container #${container} not found for MFE ${name}`);
  }

  const element = <div id={id} className='absolute inset-0 h-full w-full' />;

  return createPortal(element, parentEl);
};
