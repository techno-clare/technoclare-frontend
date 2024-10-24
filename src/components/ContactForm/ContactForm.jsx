import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        e.target,
        "YOUR_USER_ID" // Replace with your user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            purpose: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactContent}>
        <div className={styles.textSection}>
          <h1>Good Things Happen When You Say Hey</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "white",
              fontSize: "20px",
            }}
          >
            Contact Us
          </h2>{" "}
          {/* Added centered heading */}
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Purpose"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            SUBMIT <span className={styles.arrow}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
