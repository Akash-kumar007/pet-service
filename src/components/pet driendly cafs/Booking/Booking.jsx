import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Booking.css';

const cafes = [
  { id: 1, name: "Hamoni: Cafe by the Greens", location: "Address: CK Farm, near NCU College, Carterpuri Village, Sector 23A, Gurugram, Haryana 122017" },
  { id: 2, name: "The Palette ", location: "Address: 87, Dhan Mill, 100 Feet Rd, Chhatarpur Hills, Pocket D, Dr Ambedkar Colony, Chhatarpur, New Delhi, Delhi 110074, India." },
  { id: 3, name: "Pups and Cups", location: "Address: H9MJ+J6, Krishna Colony, Sarfabad Village, Block D, Sector 73, Noida, Uttar Pradesh 201301" },
  { id: 4, name: "The Jungle Cafe", location: "Address: LLOYD LAW COLLEGE, Amity University Road, IILM College Pusta food park, IILM Rd, Greater Noida, Uttar Pradesh 201310" },
  { id: 5, name: "Doggu's cafe ( Pet Bakery)", location: "Address: Sector 83, Faridabad, Haryana 121002" },
  { id: 6, name: "The Barking Bean", location: "Address: 2 First St, #01-02 Siglap V, Singapore 458278" },
  { id: 7, name: "The Little Green Cafe", location: "Address: Basement SCO-124, Backside Pritam Store, D - Block, Ranjit Avenue, Amritsar, Punjab 143001" },
  { id: 8, name: "CAFE JC", location: "Address: Coal Depot Complex, Shop No. 2 & 3, Azaadi Rte, 10D, Sector 10, Chandigarh, 160011" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, cafe: cafe.name })
    });
    const data = await response.json();
    setStatus(data.message);
    setFormData({ name: '', date: '', time: '' });
  };

  return (
    <div className="booking-container1">
      {cafe ? (
        <>
          <h1>Book a Table at {cafe.name}</h1>
          <p>📍 {cafe.location}</p>
          <form onSubmit={handleSubmit}>
            <label>
              Your Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
              Time:
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
