import { createPortal } from 'react-dom';

interface MfeContainerProps {
  name: string;
  container: string;
}

export const MfeContainer = ({ name, container }: MfeContainerProps) => {
  const id = `single-spa-application:${name}`;
  const parentEl = document.getElementById(container);

  if (!parentEl) {
    throw new Error(`Container #${container} not found for MFE ${name}`);
  }

  const element = (
    <div
      id={id}
      className='h-full'
    />
  );

  return createPortal(element, parentEl);
}
