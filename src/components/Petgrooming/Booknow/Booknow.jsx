import { useState } from "react";
import "./Booknow.css";

const Booknow = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    petType: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/book-groom-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking submitted successfully!");
        console.log(data.booking); // Log the submitted booking
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Error while submitting booking");
    }
  };

  return (
    <div className="booknow-container">
      <h2>Book a Grooming Appointment</h2>
      <form className="booknow-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ownerName"
          placeholder="Your Name"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="petName"
          placeholder="Pet's Name"
          value={formData.petName}
          onChange={handleChange}
          required
        />
        <select
          name="petType"
          value={formData.petType}
          onChange={handleChange}
          required
        >
          <option value="">Select Pet Type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Other">Other</option>
        </select>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Bathing">Bathing</option>
          <option value="Haircut">Haircut</option>
          <option value="Nail Trimming">Nail Trimming</option>
          <option value="Ear Cleaning">Ear Cleaning</option>
        </select>
       <input
  type="date"
  className="form-control"
  name="date"
  value={formData.date}
  onChange={handleChange}
  required
  min={new Date().toISOString().split("T")[0]}
/>  
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booknow;
