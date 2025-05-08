import emailjs from '@emailjs/browser';
import { EmailSender } from '../../core-logic/services/emailSender';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const AUTOREPLY_TEMPLATE = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE;
const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;
const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL;

export class EmailJsSender implements EmailSender {
  async submitForm(form: HTMLFormElement): Promise<void> {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE, form, {
        publicKey: API_KEY,
      })
      .then(
        () => {
          emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE, form, {
            publicKey: API_KEY,
          });
          alert(
            `Your message has been sent successfully! 
I will come back to you as soon as possible`
          );
          form.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            `Failed to send message, please try again later. 
If the problem persists, send an email at ${SUPPORT_EMAIL}`
          );
        }
      );
  }
}
