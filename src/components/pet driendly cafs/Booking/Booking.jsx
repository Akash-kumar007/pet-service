import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Booking.css';

const cafes = [
  { id: 1, name: "Hamoni: Cafe by the Greens", location: "CK Farm, near NCU College, Carterpuri Village, Gurugram" },
  { id: 2, name: "The Palette", location: "87, Dhan Mill, Chhatarpur Hills, New Delhi" },
  { id: 3, name: "Pups and Cups", location: "Sector 73, Noida, Uttar Pradesh" },
  { id: 4, name: "The Jungle Cafe", location: "IILM Rd, Greater Noida, Uttar Pradesh" },
  { id: 5, name: "Doggu's Cafe", location: "Sector 83, Faridabad, Haryana" },
  { id: 6, name: "The Barking Bean", location: "Siglap V, Singapore" },
  { id: 7, name: "The Little Green Cafe", location: "Ranjit Avenue, Amritsar, Punjab" },
  { id: 8, name: "CAFE JC", location: "Sector 10, Chandigarh" },
];

export default function BookTable() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cafe = cafes.find(c => c.id === parseInt(id));
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful booking
    setStatus(`Table booked successfully for ${formData.name} at ${cafe.name} on ${formData.date} at ${formData.time}`);
    
    // Clear the form
    setFormData({ name: '', date: '', time: '' });
  };

  return (
    <div className="booking-container1">
      {cafe ? (
        <>
          <h1>Book a Table at {cafe.name}</h1>
          <p>📍 {cafe.location}</p>
          <form onSubmit={handleSubmit}>
            <label>Your Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>Date:
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </label>
            <label>Time:
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>

          {status && <p style={{ marginTop: "15px", color: "green" }}>{status}</p>}

          {status && (
            <button
              onClick={() => navigate(-1)}
              className="back-button1"
              style={{
                marginTop: '10px',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'red',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ← Back to Cafés
            </button>
          )}
        </>
      ) : (
        <p>Café not found!</p>
      )}
    </div>
  );
}
