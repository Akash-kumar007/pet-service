import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to Tailmate</h1>
        <p>Your one-stop solution for all pet care needs!</p>
      </header>

      <section className="about-section">
        <img src="https://st2.depositphotos.com/1092019/9744/i/450/depositphotos_97442808-stock-illustration-multicolor-who-we-are-on.jpg" alt="Pet Care" />
        <div>
          <h2>Who We Are</h2>
          <p>
            Tailmate is your pet's best friend! We're passionate about making pet care convenient, accessible,
            and reliable. Whether you're traveling, need medical help for your furry friend, or just want to
            connect with other pet lovers, we have a service for you.
          </p>
        </div>
      </section>

      <section className="about-section reverse">
        <img src="https://media.istockphoto.com/id/1256476283/photo/from-a-vision-to-a-mission-hand-turns-dice-and-changes-the-word-vision-to-mission.jpg?s=612x612&w=0&k=20&c=6R_Cvlj4_eA2hwNpvVVhaN6-2qtXc9ZyosRBBh3DzzE=" alt="Our Mission" />
        <div>
          <h2>🌟 Our Mission</h2>
          <p>
            Our mission is to empower pet parents with the tools and services they need to raise happy and
            healthy animals. From transportation and health care to finding companionship and homes—we’re here
            every step of the way.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src="https://slidesbrain.com/wp-content/uploads/2024/03/Why-Choose-Us-Presentation-1.jpg" alt="Why Choose Us" />
        <div>
          <h2>💡 Why Choose Tailmate?</h2>
          <ul>
            <li>✔️ Easy booking for doctors and travel</li>
            <li>✔️ Trusted platform for pet transactions</li>
            <li>✔️ Secure profiles for mating and breeding</li>
            <li>✔️ Active pet community and support</li>
          </ul>
        </div>
      </section>

      <section className="about-section reverse">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMztYiLneFDliYcEvW1EnxSN1_FkzJzOz2Q&s" alt="Pet Ticketing" />
        <div>
          <h2>🚌 Pet Ticketing</h2>
          <p>
            Now travel stress-free with your pets! Our pet ticketing system helps you book safe and comfy
            travel for your beloved companions.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src="https://www.shutterstock.com/image-photo/businessman-pointing-pen-virtual-screen-600nw-2514426419.jpg" alt="Appointment" />
        <div>
          <h2>👨‍⚕️ Book Appointments</h2>
          <p>
            Connect with licensed veterinarians and book appointments for regular checkups, emergencies,
            vaccinations, and more—all from the comfort of your home.
          </p>
        </div>
      </section>

      <section className="about-section reverse">
        <img src="https://images.moneycontrol.com/static-mcnews/2017/03/BUY_Sell1-770x433.jpg?impolicy=website&width=770&height=431" alt="Buy/Sell Pets" />
        <div>
          <h2>🐾 Buy or Sell Pets</h2>
          <p>
            Looking for a new furry friend or a loving home for one? Our buy/sell pet platform ensures safe and
            verified transactions with genuine pet lovers.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src="https://i.prcdn.co/img?regionKey=xIWtQSloSbP5bmR4NTVFdw%3D%3D" alt="Pet Mating" />
        <div>
          <h2>❤️ Pet Mating</h2>
          <p>
            Help your pet find the perfect companion. Tailmate makes it easier to connect with other verified pet
            owners to ensure healthy and ethical mating.
          </p>
        </div>
      </section>

      <section className="about-section testimonials reverse">
        <img src="https://impulsecreative.com/hs-fs/hub/171726/file-2498923088-jpg/Customers.jpg" alt="Happy Customers" />
        <div>
          <h2>💬 What Our Customers Say</h2>
          <blockquote>
            “Tailmate made it super easy to travel with my cat. No stress, just purrs!” – <strong>Ritika S.</strong>
          </blockquote>
          <blockquote>
            “I booked a vet within minutes. Love how smooth the appointment system is!” – <strong>Manish G.</strong>
          </blockquote>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to experience stress-free pet care?</h2>
        {/* <button onClick={() => window.location.href = "/services"}>Explore Our Services</button> */}
      </section>

      <footer className="about-footer">
        <p>Thank you for choosing Tailmate – where pets come first.</p>
      </footer>
    </div>
  );
};

export default Aboutus;
