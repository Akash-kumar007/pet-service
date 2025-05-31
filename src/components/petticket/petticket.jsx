import { useState } from "react";
import "./petticket.css";

const PetTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    travelMode: "",
    petDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation function
  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        if (!value.trim()) errorMsg = "Name is required!";
        else if (!/^[A-Za-z\s]+$/.test(value)) errorMsg = "Only letters allowed!";
        break;
      case "email":
        if (!value.trim()) errorMsg = "Email is required!";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMsg = "Invalid email!";
        break;
      case "phone":
        if (!value.trim()) errorMsg = "Phone is required!";
        else if (!/^\d{10}$/.test(value)) errorMsg = "Enter a valid 10-digit number!";
        break;
      case "date":
        if (!value) errorMsg = "Date is required!";
        break;
      case "travelMode":
        if (!value.trim()) errorMsg = "Select a travel mode!";
        break;
      case "petDetails":
        if (!value.trim()) errorMsg = "Pet details are required!";
        break;
      case "from":
      case "to":
        if (!value.trim()) errorMsg = `Enter a valid ${name} location!`;
        break;
      default:
        break;
    }

    return errorMsg;
  };

  // Handle input change and validate
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate while typing
    setErrors({ ...errors, [name]: validateField(name, value) });

    // Reset submission state when user edits
    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  let validationErrors = {};

  // Validate each field
  Object.keys(formData).forEach((key) => {
    const error = validateField(key, formData[key]);
    if (error) validationErrors[key] = error;
  });

  // If no errors, submit data
  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await fetch('http://localhost:5001/api/pet-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          from: "",
          to: "",
          date: "",
          travelMode: "",
          petDetails: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    }
  } else {
    setErrors(validationErrors);
  }
};

  return (
    
    <div className="booking-containerr">
      {submitted ? (
        <div className="success-messagee">
          <h3>🎉 Booking Successful!</h3>
          <p>Your pet-friendly journey has been confirmed!</p>
          <button className="btn-bookingg" onClick={() => setSubmitted(false)}>Make Another Booking</button>
        </div>
      ) : (
        <form className="booking-formm" onSubmit={handleSubmit}>
          <h2 className="journey-text">Book Your Pet-Friendly Journey</h2>
          <p> <strong>Disclaimer:</strong> Only dogs and cats are allowed in our services. We do not accommodate other animals. Please ensure your pet meets these requirements before making any bookings or inquiries.</p>
          <div className="form-groupp">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-groupp">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-groupp">
            <label>Phone</label>
            <input type="tel"placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-groupp">
            <label>From</label>
            <input type="text"placeholder="From" name="from" value={formData.from} onChange={handleChange} />
            {errors.from && <span className="error">{errors.from}</span>}
          </div>

          <div className="form-groupp">
            <label>To</label>
            <input type="text"placeholder="To" name="to" value={formData.to} onChange={handleChange} />
            {errors.to && <span className="error">{errors.to}</span>}
          </div>

          <div className="form-groupp">
            <label>Date</label>
<input
  type="date"
  className="form-control"
  name="date"
  value={formData.date}
  onChange={handleChange}
  required
  min={new Date().toISOString().split("T")[0]}
/>              {errors.date && <span className="error">{errors.date}</span>}
          </div>

          <div className="form-groupp">
            <label>Travel Mode</label>
            <select name="travelMode" value={formData.travelMode} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Train">Train</option>
              <option value="Flight">Flight</option>
            </select>
            {errors.travelMode && <span className="error">{errors.travelMode}</span>}
          </div>

          <div className="form-groupp">
            <label>Pet Details</label>
            <textarea name="petDetails" rows="3" placeholder="Describe your pet (size, breed, any special needs)" value={formData.petDetails} onChange={handleChange} />
            {errors.petDetails && <span className="error">{errors.petDetails}</span>}
          </div>

          <button type="submit" className="btn-bookingg">Confirm Booking</button>
        </form>
      )}
    </div>
  );
};

export default PetTicket;
