import "./howitworks.css" 

const Howitworks = () => {
  return (
    <div className="how-it-works">
      <div className="how-left">
        <img
          src="https://cdn.britannica.com/37/91837-050-2CC301F9/Children-pet-dog.jpg"
          alt="How it works"
          className="how-image"
        />
        <div className="play-button-wrapper">
          {/* <img src={} alt="Play" className="play-button" /> */}
        </div>
      </div>
      <div className="how-right">
        <h2>How Does Petsfolio Works?</h2>
        <div className="steps">
          <div className="step">
            <span className="number">01</span>
            <div>
              <strong>Search a Pet Master</strong>
            </div>
          </div>
          <div className="step">
            <span className="number">02</span>
            <div>
              <strong>Make a Booking</strong>
            </div>
          </div>
          <div className="step">
            <span className="number">03</span>
            <div>
              <strong>Enjoy Peace of Mind</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
