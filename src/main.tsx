import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FakeEmailSender } from './website/adapters/services/fakeEmailSender.ts';
// import { EmailJsSender } from './website/adapters/services/emailJSSender.ts';
import { UseCases, UseCaseContext } from './website/useCaseContext.ts';

const emailSender = new FakeEmailSender();

const useCases: UseCases = {
  emailSender: emailSender,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseCaseContext.Provider value={useCases}>
      <App />
    </UseCaseContext.Provider>
  </StrictMode>
);
