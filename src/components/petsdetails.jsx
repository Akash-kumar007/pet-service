import { useParams } from "react-router-dom";

const pets = [
  {
    id: "1",
    name: "DOG",
    images: [
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg", name: "Dog 1" },
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg", name: "Dog 2" },
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg", name: "Dog 3" },
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg", name: "Dog 4" },
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Dog_115-original._SY222__V1712351227_.jpeg", name: "Dog 5" }
    ],
    description: "Dogs are loyal companions and great family pets."
  },
  {
    id: "2",
    name: "CAT",
    images: [
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Cat_116-original._SY222__V1712351227_.jpeg", name: "Cat 1" },
      { url: "https://www.example.com/cat2.jpg", name: "Cat 2" },
      { url: "https://www.example.com/cat3.jpg", name: "Cat 3" },
      { url: "https://www.example.com/cat4.jpg", name: "Cat 4" },
      { url: "https://www.example.com/cat5.jpg", name: "Cat 5" }
    ],
    description: "Cats are independent and loving pets that make great indoor companions."
  },
  {
    id: "3",
    name: "HORSE",
    images: [
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Horse_117-original._SY222__V1712351228_.jpeg", name: "Horse 1" },
      { url: "https://www.example.com/horse2.jpg", name: "Horse 2" },
      { url: "https://www.example.com/horse3.jpg", name: "Horse 3" },
      { url: "https://www.example.com/horse4.jpg", name: "Horse 4" },
      { url: "https://www.example.com/horse5.jpg", name: "Horse 5" }
    ],
    description: "Horses are strong and majestic animals, often used for riding and farming."
  },
  {
    id: "4",
    name: "HORSE",
    images: [
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Horse_117-original._SY222__V1712351228_.jpeg", name: "Horse 1" },
      { url: "https://www.example.com/horse2.jpg", name: "Horse 2" },
      { url: "https://www.example.com/horse3.jpg", name: "Horse 3" },
      { url: "https://www.example.com/horse4.jpg", name: "Horse 4" },
      { url: "https://www.example.com/horse5.jpg", name: "Horse 5" }
    ],
    description: "Horses are strong and majestic animals, often used for riding and farming."
  },
  {
    id: "5",
    name: "HORSE",
    images: [
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Horse_117-original._SY222__V1712351228_.jpeg", name: "Horse 1" },
      { url: "https://www.example.com/horse2.jpg", name: "Horse 2" },
      { url: "https://www.example.com/horse3.jpg", name: "Horse 3" },
      { url: "https://www.example.com/horse4.jpg", name: "Horse 4" },
      { url: "https://www.example.com/horse5.jpg", name: "Horse 5" }
    ],
    description: "Horses are strong and majestic animals, often used for riding and farming."
  },
  {
    id: "6",
    name: "HORSE",
    images: [
      { url: "https://image.chewy.com/catalog/cms/images/2024-ShopByPet-Refresh-NavTile_Horse_117-original._SY222__V1712351228_.jpeg", name: "Horse 1" },
      { url: "https://www.example.com/horse2.jpg", name: "Horse 2" },
      { url: "https://www.example.com/horse3.jpg", name: "Horse 3" },
      { url: "https://www.example.com/horse4.jpg", name: "Horse 4" },
      { url: "https://www.example.com/horse5.jpg", name: "Horse 5" }
    ],
    description: "Horses are strong and majestic animals, often used for riding and farming."
  }
];

const Petsdetails = () => {
  const { id } = useParams();
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">Pet Not Found</h2>
        <p>The pet you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">{pet.name}</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {pet.images.map((img, index) => (
          <div key={index} className="text-center">
            <img
              src={img.url}
              alt={img.name}
              className="rounded border border-warning border-3 p-2"
              style={{ width: "170px", height: "170px", objectFit: "cover", marginRight:"40px" }}
            />
            <p className="mt-2 fw-bold">{img.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-3">{pet.description}</p>
    </div>
  );
};

export default Petsdetails;
