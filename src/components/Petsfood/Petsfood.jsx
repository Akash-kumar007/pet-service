import "./petsfood.css";

const pets = [
  { id: 1, name: "DOG FOOD", image: "https://image.chewy.com/catalog/cms/images/110183-Iams-Dog-Food-original._SY222__V1712021346_.jpeg" },
  { id: 2, name: "DOGS FLEA & TICK", image: "https://image.chewy.com/catalog/cms/images/2023-05-Recipe-2-FrontlinePlus-Dog-FleaTick-original._SY222__V1712021347_.jpeg" },
  { id: 3, name: "DOG TREATS", image: "https://image.chewy.com/catalog/cms/images/2023-02-Dog-Treats-ePLP-Recipe2-3-50345-original._SY222__V1711567627_.jpeg" },
  { id: 4, name: "CAT FOOD", image: "https://image.chewy.com/catalog/cms/images/2023-04-NonSku-Recipe2-140273-original._SY222__V1712021347_.jpeg" },
  { id: 5, name: "CAT LITTER", image: "https://image.chewy.com/catalog/cms/images/47416-Litter-Cat-original._SY222__V1712021347_.jpeg" },
];

const Petsfood = () => {
  return (
    <div className="petsfood-container">
      <h2>Our Pets Food</h2>
      <div className="pets-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} className="pet-img" />
            <p className="pet-name">{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Petsfood;
