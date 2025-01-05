import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // State for form data
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    to_name: "Mohamed Infaq.dev",
    message: "",
  });

  const [done, setDone] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zmfxmbh",
        "template_h9xissk",
        formData,
        "Kl3_UdarcyBubbU3z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          }); // Reset form data
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* Right side form */}
      <div className="c-right">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Send" className="button" />
          <span style={{ color: darkMode ? "white" : "green" }}>
            {done && "Thanks for Contacting me"}
          </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
