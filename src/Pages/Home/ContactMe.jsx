import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE, EMAILJS_API_KEY } from "../../config";


export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE, form.current, {
        publicKey: EMAILJS_API_KEY,
      })
      .then(
        () => {
          alert("Your message has been sent successfully! I will come back to you as soon as possible");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later. If the problem persists, contact me at giunio@avenueitconsulting.onmicrosoft.com");
        },
      );
  };

  return (
    <section
      id="Contact"
      className="contact--section"
    >
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. In, odit.
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label
            htmlFor="first-name"
            className="contact--label"
          >
            <span className="text-md">
              First Name
            </span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label
            htmlFor="last-name"
            className="contact--label"
          >
            <span className="text-md">
              Last Name
            </span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label
            htmlFor="email"
            className="contact--label"
          >
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label
            htmlFor="phone-number"
            className="contact--label"
          >
            <span className="text-md">
              phone-number
            </span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label
          htmlFor="choode-topic"
          className="contact--label"
        >
          <span className="text-md">
            Choose a topic
          </span>
          <select
            id="choose-topic"
            className="contact--input text-md"
          >
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label
          htmlFor="message"
          className="contact--label"
        >
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label
          htmlFor="checkboc"
          className="checkbox--label"
        >
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
          />
          <span className="text-sm">
            I accept the terms
          </span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
