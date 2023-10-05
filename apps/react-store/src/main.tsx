import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
