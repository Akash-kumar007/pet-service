import { useNavigate } from "react-router-dom";
import "./petcategory.css";

const pets = [
  { name: 'Dog', image: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Cat', image: 'https://www.thesprucepets.com/thmb/dO4KOe9_4qokOgiObitGGMJQIec=/1999x0/filters:no_upscale():strip_icc()/twenty20_e47b3798-dd9b-40b1-91ef-1d820337966e-5aa3f798642dca00363b0df1.jpg' },
  { name: 'Fish', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/KN/ZB/OF/77370859/live-fish.jpg' },
  { name: 'Bird', image: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg' },
  { name: 'Rabbit', image: 'https://thumbs.dreamstime.com/b/white-rabbit-grass-1747425.jpg' },
  { name: 'Hourse', image: 'https://t3.ftcdn.net/jpg/02/44/22/96/360_F_244229673_NJ9glLa13UImAWZPqIgmj0uLDRD8F3hT.jpg' },
  { name: 'Hamster', image: 'https://media-be.chewy.com/wp-content/uploads/2024/09/25122709/hamster.jpg' },
  { name: 'Reptiles', image: 'https://www.worldanimalprotection.org/siteassets/images/article/03084824_1014862.jpg' }
];

const Petcategory = () => {
  const navigate = useNavigate();

  const handleClick = (petName) => {
    navigate(`/services/${petName}`);
  };

  return (
    <div className="explore-container">
      <h2>Explore by pets</h2>
      <div className="pet-container">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index} onClick={() => handleClick(pet.name)}>
            <img src={pet.image} alt={pet.name} />
            <div className="pet-label">{pet.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Petcategory;