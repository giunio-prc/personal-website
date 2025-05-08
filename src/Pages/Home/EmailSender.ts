import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const AUTOREPLY_TEMPLATE = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE;
const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

export function SendEmail(form: HTMLFormElement) {
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
If the problem persists, contact me at 
giunio@avenueitconsulting.onmicrosoft.com`
        );
      }
    );
}
