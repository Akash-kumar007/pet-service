// src/CafesWithPets.js
import './petfriendlycafs.css';
import { useNavigate } from 'react-router-dom';

const cafes = [
  { id: 1, name: "Hamoni: Cafe by the Greens", location: "GurGaon", image: "https://im.whatshot.in/img/2024/Apr/og-chandigarh-pet-1714123203.jpg" },
  { id: 2, name: " The Palette ", location: "Delhi", image: "https://www.alcazar.in/UserUploads/Images/Blog/Pet%20Cafe%20Delhi/dogs-cafe-delhi.jpg" },
  { id: 3, name: "Pups and Cups", location: "Noida", image: "https://blog-content.ixigo.com/wp-content/uploads/2018/08/1stimage.jpg" },
  { id: 4, name: "The Jungle Cafe", location: "Gr noida", image: "https://im.whatshot.in/img/2018/Jul/2-cats-1530948876.jpg" },
  { id: 5, name: "Doggu's cafe ( Pet Bakery)", location: "Faridabad", image: "https://petofy.blob.core.windows.net/petofycontainer/2021-09-27/20210927T071055582.jpeg" },
  { id: 6, name: "The Barking Bean", location: "Ludiana", image: "https://b.zmtcdn.com/data/collections/f312ede290cb7ab011e7aefe33205cc5_1683902289.jpg" },
  { id: 7, name: "The Little Green Cafe", location: "Amristar", image: "https://www.alcazar.in/UserUploads/Images/Blog/pet%20cafes%20mumbai/dog-cafe-Mumbai.jpg" },
  { id: 8, name: "CAFE JC", location: "Chandigarh", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/3d/d5/purr.jpg?w=900&h=500&s=1" },
];

const CafeCard = ({ id, name, location, image }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="cafe-card">
      <img src={image} alt={name} className="cafe-image" />
      <h2>{name}</h2>
      <p>📍 {location}</p>
      <button className="book-button" onClick={handleBooking}>Book a Table</button>
    </div>
  );
};

export default function CafesWithPets() {
  return (
    <div className="pet-page">
      <h1 className='cafs-text'>🐾 Pet Friendly Cafés 🐾</h1>
      <div className="cafe-cards">
        {cafes.map(cafe => (
          <CafeCard key={cafe.id} {...cafe} />
        ))}
      </div>
    </div>
  );
}
