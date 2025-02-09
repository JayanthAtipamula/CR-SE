import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Preload critical assets
const preloadLinks = [
  { rel: 'preconnect', href: 'https://images.unsplash.com' },
  { rel: 'preconnect', href: 'https://raw.githubusercontent.com' }
];

preloadLinks.forEach(({ rel, href }) => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);