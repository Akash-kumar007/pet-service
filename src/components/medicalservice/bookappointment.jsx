import { useState } from "react";
import "./booking/booking.css"; // Ensure this path is correct

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    petName: "",
    ownerName: "",
    contact: "",
    date: "",
    time: "",
    service: "",
    doctor: ""
  });

  const services = ["General Checkups", "Emergency Care", "Surgeries", "Vaccinations", "Nutrition & Diet"];
  const doctors = ["Dr. Hardeep Singh", "Dr. Vipin Talwar","Dr. Bhatti", "Dr. Anil Kumar Taneja","Dr. Sandeep Goel"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(`Appointment booked successfully for ${formData.petName} on ${formData.date} at ${formData.time}!`);
        setFormData({
          petName: "",
          ownerName: "",
          contact: "",
          date: "",
          time: "",
          service: "",
          doctor: ""
        });
      } else {
        const data = await response.json();
        alert('Failed to book appointment: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-image-container">
      <div className="container-fluid py-5" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="card shadow-lg p-4 border-0 rounded-4">
                <h2 className="text-center mb-4 text-primary fw-bold">🐾 Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">🐶 Pet Name</label>
                    <input type="text" className="form-control" name="petName" value={formData.petName} onChange={handleChange} required placeholder="Enter your pet's name" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">👤 Owner Name</label>
                    <input type="text" className="form-control" name="ownerName" value={formData.ownerName} onChange={handleChange} required placeholder="Enter your name" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">📞 Contact Number</label>
                    <input type="tel" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required placeholder="Enter your contact number" />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">📅 Date</label>
<input
  type="date"
  className="form-control"
  name="date"
  value={formData.date}
  onChange={handleChange}
  required
  min={new Date().toISOString().split("T")[0]}
/>                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">⏰ Time</label>
                      <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">🩺 Select Service</label>
                    <select className="form-select" name="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Choose a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">👨‍⚕️ Select Doctor (Optional)</label>
                    <select className="form-select" name="doctor" value={formData.doctor} onChange={handleChange}>
                      <option value="">Choose a Doctor</option>
                      {doctors.map((doctor, index) => (
                        <option key={index} value={doctor}>{doctor}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mt-3">📅 Confirm Appointment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
