import "./Petgrooming.css";
import { useNavigate } from "react-router-dom";

const Petgrooming = () => {
  const navigate = useNavigate(); // ✅ this line was missing

  return (
    <div className="grooming-page">
      <div className="grooming-hero">
        <div className="overlay">
          <h1>Professional Pet Grooming</h1>
          <p>Because your furry friend deserves the best care</p>
        </div>
      </div>

      <div className="grooming-services">
        <h2>Our Grooming Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://hips.hearstapps.com/hmg-prod/images/how-to-bathe-dog-1587137329.jpg" alt="Bathing" />
            <h3>Bathing</h3>
            <p>Gentle, spa-style bath with pet-safe shampoo & conditioner.</p>
          </div>
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrib7GVovXBVF7KFdcaYeWZSLfy54sdIM6ww&s" alt="Haircuts" />
            <h3>Haircut</h3>
            <p>Stylish cuts tailored to your pet's breed & personality.</p>
          </div>
          <div className="service-card">
            <img src="https://www.animalhumanesociety.org/sites/default/files/styles/scale_width_480/public/media/image/2021-08/nail-trim-graphic.png.jpg?itok=mRZT2489" alt="nails cut" />
            <h3>Nail Trimming</h3>
            <p>Safe and quick nail trimming to keep paws healthy.</p>
          </div>
          <div className="service-card">
            <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147569900/images/4f5e87f-bdb5-7276-da00-7d5e271a85f_Dog-getting-groomed.jpg" alt="Ear Cleaning" />
            <h3>Ear Cleaning</h3>
            <p>Thorough ear cleaning to prevent infections.</p>
          </div>
        </div>
      </div>

      <div className="grooming-cta">
        <h2>Book a Grooming Session Today!</h2>
        <p>Your pet will love the pampering, and you'll love the results.</p>
        <button onClick={() => navigate("/booknow")}>Book Now</button>
      </div>
    </div>
  );
};

export default Petgrooming;
