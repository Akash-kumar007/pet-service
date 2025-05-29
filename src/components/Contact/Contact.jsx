// ContactUs.jsx
import { useState } from "react";
import "./Contact.css"; // Styling ke liye (neeche de raha hoon)

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="contact-container py-5">
      <div className="contact-card">
        <h2 className="text-center text-primary mb-4">🐾 Contact Us</h2>
        <p className="text-center mb-4">We would love to hear from you! Please fill out the form below.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">👤 Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">📧 Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">📞 Phone</label>
            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your Phone Number" />
          </div>

          <div className="mb-3">
            <label className="form-label">📝 Message</label>
            <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="5"></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold"> Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
