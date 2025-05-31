import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import

const petTypes = ["Dog", "Cat", "Horse", "Fish", "Bird", "Rabbit", "Hamster", "Reptile"];

const petServices = [
  { name: "Pet-friendly Cafés", path: "/Petfriendlycafs" },
  { name: "Pet Ticketing", path: "/petticket" },
  { name: "Medical Service", path: "/medicalservice" },
  { name: "Pet Grooming", path: "/petgrooming" },
  { name: "Buy or Sell", path: "/buysellpage" },
  { name: "Pet Mating", path: "/petmating" },
  { name: "Food and nutrition", path: "/food-nutrition" },
  
];

const PetServicesPage = () => {
  const [selectedPet, setSelectedPet] = useState("Dog");
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Pet Types</h2>
        <ul className="space-y-2">
          {petTypes.map((pet) => (
            <li key={pet}>
              <button
                onClick={() => setSelectedPet(pet)}
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all font-semibold ${
                  selectedPet === pet ? "bg-yellow-400 text-black" : "text-white"
                }`}
              >
                {pet}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Services for {selectedPet}
        </h1>
        <div className="grid gap-4  sm:grid-cols-2 md:grid-cols-3">
          {petServices.map((service) => (
            <div
              key={service.name}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-yellow-500 hover:text-black transition cursor-pointer"
              onClick={() => navigate(service.path)} // ✅ Redirect on click
            >
              <h2 className="text-xl font-semibold text-center">{service.name}</h2>
              <p className="text-md mt-3 text-white">Available for {selectedPet}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PetServicesPage;
