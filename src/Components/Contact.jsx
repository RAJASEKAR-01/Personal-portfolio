import React, { useState } from "react";
import "../Css/Contact.css";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const validateForm = (form) => {
    const { name, email, message } = form.elements;
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event, next) => {
    event.preventDefault(); // Prevent page refresh
    setStatusMessage(""); // Clear previous messages

    const form = event.target;

    // Validate form fields
    if (!validateForm(form)) {
      setStatusMessage("Please fill out all required fields.");
      setMessageType("error");
      next(); // Complete the progress animation immediately
      return;
    }

    // Prepare form data for submission
    const formData = new FormData(form);
    formData.append("access_key", "07ee6313-8d14-4bec-b36c-eeae3d405f43");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Message sent successfully!");
        setMessageType("success");
        form.reset(); // Clear the form fields
      } else {
        setStatusMessage(`Error: ${data.message}`);
        setMessageType("error");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
      setMessageType("error");
    } finally {
      next(); // Complete the progress animation
    }
  };

  return (
    <div className="contact-section">
      <div className="box-contact border-none">
            <h1 className="contact-us-head">Let's Chat.</h1>
            <h1 className="contact-us-head">Tell me about Your Project.</h1>
            <p>Let's create something together</p>
            <div className="social-media-icons">
            <SocialIcon network="whatsapp" url="https://wa.me/919677978876" />
            <SocialIcon network="instagram" url="https://www.instagram.com/_introvert_prince?igsh=MTZ5bzEybm95cXU2eg==" />
            <SocialIcon network="linkedin" url="https://linkedin.com/in/rajasekar-m-b47b5624a" />
            <SocialIcon network="github" url="https://github.com/RAJASEKAR-01 " />
            </div>
      </div>
      <div className="box-contact">
        <form
          onSubmit={(event) => {
            const form = event.target;
            handleSubmit(event, () => {});
          }}
        >
          <div className="C-head">
            <h1>Send us a Message</h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your Message"
            required
          ></textarea>
          <div className="btn-contact">
          <AwesomeButtonProgress
              type="primary"
              action={(element, next) => handleSubmit(element, next)}
              loadingLabel="Wait..."
              resultLabel="Success!"
              style={{
                "--progress-speed": "0.4s", // Faster progress completion
                "--button-primary-color": "cornflowerblue",
                "--progress-bar-color": "green",
              }}
            >
            Send Message
          </AwesomeButtonProgress>
          </div>
          {statusMessage && (
            <p className={`status-message ${messageType}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
