import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "General Checkups", desc: "Routine health checkups & vaccinations for your pets." },
  { id: 2, name: "Emergency Care", desc: "24/7 emergency treatments available for critical situations." },
  { id: 3, name: "Surgeries", desc: "Expert surgical procedures including spaying & neutering." },
  { id: 4, name: "Vaccinations", desc: "Complete vaccination programs for all pets." },
  { id: 5, name: "Nutrition & Diet", desc: "Custom diet plans for pet health & fitness." },
];

const doctors = [
  { id: 1, name: "Dr. Emily Carter", specialty: "Veterinary Surgeon", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Dr. John Smith", specialty: "Pet Nutritionist", rating: "⭐⭐⭐⭐" },
];

const MedicalServices = () => {
  const [search, setSearch] = useState("");
  
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="jumbotron text-center bg-info text-white p-5 rounded">
        <h1>Quality Healthcare for Your Pets</h1>
        <p>Providing expert medical care for your furry companions with love and expertise.</p>
        <Link to="/book-appointment" className="btn btn-light">Book an Appointment</Link>
      </div>
      
      {/* Search Bar */}
      <div className="input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search medical services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      
      {/* Medical Services List */}
      <h3 className="text-center mb-4">Our Medical Services</h3>
      <div className="row">
        {services.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map((service) => (
          <div key={service.id} className="col-md-4 mb-3">
            <div className="card shadow p-3">
              <h5>{service.name}</h5>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Doctors */}
      <h3 className="text-center mt-5">Featured Veterinarians</h3>
      <div className="row">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="col-md-6 mb-3">
            <div className="card shadow p-3">
              <h5>{doctor.name}</h5>
              <p>{doctor.specialty}</p>
              <p>{doctor.rating}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Emergency Contact */}
      <div className="alert alert-danger text-center mt-5">
        <h4>🚨 24/7 Emergency Helpline: +1 800 123 4567</h4>
        <p>Call us anytime for urgent pet care.</p>
      </div>
    </div>
  );
};

export default MedicalServices;