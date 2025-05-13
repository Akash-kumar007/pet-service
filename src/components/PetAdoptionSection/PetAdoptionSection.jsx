import React from 'react';
import './PetAdoptionSection.css';

const PetAdoptionSection = () => {
  return (
    <div className="pet-adoption-container">
      <h1 className="main-heading">Choose a pet</h1>

      <div className="steps-grid">
        <div className="step-item">
          <div className="step-icon-circle">1</div>
          <h2>Choose a pet</h2>
          <p>Choosing a pet is the first step toward a lifelong bond. Consider your lifestyle, home space, and the time you can offer. Whether it’s a dog, cat, or small animal, each pet has unique needs. Take time to connect and find the perfect match for your family.</p>
        </div>

        <div className="step-item">
          <div className="step-icon-circle">2</div>
          <h2>Meet us</h2>
          <p>
          After choosing your pet, come meet us to learn more and ask questions. Our team is here to guide you, share pet care tips, and ensure you’re fully prepared. This visit helps build trust and gives you a chance to bond with your future companion before adoption.</p>
        </div>

        <div className="step-item">
          <div className="step-icon-circle">3</div>
          <h2>Fill the adoption form</h2>
          <p>Once you've chosen your pet and connected with us, the next step is completing the adoption form. This ensures a safe and responsible placement. The form collects basic details, your living situation, and pet care plans to help us match you with the right pet and support your journey.</p>
        </div>

        <div className="step-item">
          <div className="step-icon-circle">4</div>
          <h2>Let your pet get used to a new family</h2>
          <p>The final step is helping your new pet settle in. Be patient as they adjust to their new home and family. Provide a calm environment, establish routines, and offer love and care. Over time, your pet will bond with you and feel at home in their new space.</p>
        </div>
      </div>
    </div>
  );
};

export default PetAdoptionSection;
