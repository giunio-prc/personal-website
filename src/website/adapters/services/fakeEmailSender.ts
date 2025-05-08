import { EmailSender } from '../../core-logic/services/emailSender';

export class FakeEmailSender implements EmailSender {
  async submitForm(form: HTMLFormElement): Promise<void> {
    console.log('FakeEmailSender: Sending email...');
    console.log('Form data:', form);
    return new Promise(() => {
      setTimeout(() => {
        alert(
          `Your message has been sent successfully!
I will come back to you as soon as possible`
        );
      }, 1);
    });
  }
}
