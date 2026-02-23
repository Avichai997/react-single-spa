import './index.css';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('content')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
