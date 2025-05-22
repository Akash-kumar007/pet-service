import React, { useEffect, useState } from "react";
import "./Admindashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("purchases")) || [];
    setBookings(data);
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Booking Orders</li>
         
        </ul>
      </div>

      <div className="admin-main">
        <div className="overview-section">
          <h3>Overview</h3>
          <div className="overview-cards">
            <div className="card">Total Bookings: {bookings.length}</div>
            <div className="card">Total Revenue: ₹{bookings.reduce((acc, b) => acc + b.amount, 0)}</div>
          </div>
        </div>

       <div className="bookings-section">
  <h3 className="section-title">Recent Bookings</h3>
  {bookings.length > 0 ? (
    <div className="table-wrapper">
      <table className="booking-table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.paymentId}</td>
              <td>{booking.itemName}</td>
              <td>₹{booking.amount}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="no-bookings">No bookings found.</p>
  )}
</div>

      </div>
    </div>
  );
};

export default AdminDashboard;