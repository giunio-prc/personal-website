import { EmailSender } from './core-logic/services/emailSender.ts';
import React from 'react';

export type UseCases = {
  emailSender: EmailSender;
};

export const UseCaseContext = React.createContext<UseCases>(null!);
