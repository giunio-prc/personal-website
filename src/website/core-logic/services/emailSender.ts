export interface EmailSender {
  submitForm: (form: HTMLFormElement) => Promise<void>;
}
