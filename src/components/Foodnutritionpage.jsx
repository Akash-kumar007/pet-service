import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const foodDetails = {
  Dog: [
    { imageUrl:"https://m.media-amazon.com/images/I/41r9X6ShDwL._AC_UF1000,1000_QL80_.jpg", name: "Purina Pro Plan", description: "High-protein formula with chicken", price: 1299 },
    { imageUrl:"https://cdn.royalcanin-weshare-online.io/_OdbV4QBaPOZra8q_fKz/v3/mrpro-22094-rc-online-store-banner-310x233-11-04-640x420",name: "Royal Canin", description: "Breed-specific dry dog food", price: 1499 },
    { imageUrl:"https://s7d2.scene7.com/is/image/PetSmart/5266810_alt6?fmt=webp&wid=400&hei=400",name: "Hill’s Science Diet", description: "Vet-recommended nutrition", price: 1399 },
    { imageUrl:"https://m.media-amazon.com/images/I/71OvjAYJvKL._AC_UF1000,1000_QL80_.jpg",name: "Blue Buffalo", description: "Grain-free natural formula", price: 1199 },
    { imageUrl:"https://www.pedigree.in/files/styles/webp/public/2023-09/809874871_pedigree-post.png.webp?VersionId=A2Jf3R9hNpyMA8_9mSCKlSKIJWpW0u9F&itok=l1Utau1p",name: "Pedigree", description: "Affordable and complete diet", price: 899 },
    { imageUrl:"https://www.nutro.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf2471/files/migrate-product-files/images/ngnoxbst228hbvyhf0wq.png",name: "Nutro Ultra", description: "Superfood blend for energy", price: 1599 },
  ],
  Cat: [
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEK-vvY3Hdnf_3y8uowYyHol1m3agCfR2SQ&shttps://m.media-amazon.com/images/I/41r9X6ShDwL._AC_UF1000,1000_QL80_.jpg",name: "Friskies", description: "Delicious seafood variety", price: 499 },
    { imageUrl:"https://headsupfortails.com/cdn/shop/files/9310022866500_2.jpg?v=1747820535&width=533",name: "Whiskas", description: "Rich in vitamins & minerals", price: 549 },
    { imageUrl:"https://images-cdn.ubuy.co.in/666f29d71a2c9f10771ab6ed-meow-mix-original-choice-dry-cat-food.jpg",name: "Meow Mix", description: "Tasty, crunchy bites", price: 579 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsF62COaqYJwLfnckigHXP_lEn06wiZzizg&s",name: "Fancy Feast", description: "Gourmet wet cat food", price: 649 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlg7-QXiVDaOjs8LnAtEEXN4um1OSabE5xgg&s",name: "Royal Canin", description: "For healthy coat and digestion", price: 749 },
    {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFUfqbcKxrlSRjIEN0DgyrFFcQa2AfNjdKQ&s", name: "Sheba", description: "Soft fish flavor blend", price: 699 },
  ],
  Horse: [
    { imageUrl:"https://www.baileyshorsefeeds.co.uk/thumbnails/0/24913.20.jpeg",name: "Oats Mix", description: "Balanced oats grain mix", price: 999 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VTYRrdIX6V4OMGSdg0r_2AjJQjXQOXqyJQ&s",name: "Purina Omolene", description: "High-energy horse feed", price: 1199 },
    {imageUrl:"https://madbarn.com/wp-content/uploads/2021/08/SafeChoice-Senior-Nutrena-Horse-Feed-1.jpg", name: "Nutrena SafeChoice", description: "Complete horse nutrition", price: 1399 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3LuqRQWyhEcswV8hKsRFO8Mtu0ub5uC9VA&s",name: "Triple Crown", description: "Fortified with vitamins", price: 1299 },
    {imageUrl:"https://cdn11.bigcommerce.com/s-99vj2qx/images/stencil/500x659/products/24272/83037/purina-strategy-gx-bag__47191.1711645967.jpg?c=2", name: "Strategy GX", description: "Great for performance horses", price: 1099 },
  ],
  Fish: [
    { imageUrl:"https://images-cdn.ubuy.co.in/6691920e426dca0fea266f66-tetra-tetramin-tropical-flakes.jpg",name: "TetraMin Flakes", description: "Balanced daily nutrition", price: 199 },
    { imageUrl:"https://www.absolute-koi.com/media/catalog/product/u/n/untitled-38.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=660&width=660&canvas=660:660",name: "Hikari Gold", description: "Color enhancing pellets", price: 249 },
    { imageUrl:"https://m.media-amazon.com/images/I/61m5we72bGL.jpg",name: "Omega One Pellets", description: "High in natural protein", price: 229 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVlWjuoc1FMzOrI0HZirwgWkEvQp_NimzzA&s",name: "API Tropical", description: "Water-clean formula", price: 189 },
    { imageUrl:"https://aquadiscusindia.com/wp-content/uploads/2021/01/A6578_packaging_UK-400x400-1.jpg",name: "Fluval Bug Bites", description: "Insect-based protein", price: 269 },
  ],
  Bird: [
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0mPhm6gUAF5jg3mDmWnvrir0RSTpr4Un6w&s",name: "Kaytee Forti-Diet", description: "Seed mix for parrots", price: 349 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS334yWK1OWVEMWWvQPjJvOgQ8g7o9RU-Wvww&s",name: "ZuPreem FruitBlend", description: "Pellets with real fruit", price: 399 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11n96T11AQz0zCzGjMBmouVrkpMcAaTwS_w&s",name: "Lafeber’s Berries", description: "Gourmet bird treat", price: 429 },
    {imageUrl:"https://m.media-amazon.com/images/I/91tt97N0CuL._AC_UF1000,1000_QL80_.jpg", name: "Harrison’s Foods", description: "Organic bird food", price: 459 },
  ],
  Rabbit: [
    { imageUrl:"https://www.loyalpetzone.com/wp-content/uploads/2023/11/oxbow-adult-guineapig-food.jpg",name: "Oxbow Essentials", description: "Timothy hay based pellets", price: 499 },
    { imageUrl:"https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/all-products/small-animal/hay/timothy-hay/timothy-hay/00245TimHay65lbFrontFirstCut.jpg",name: "Kaytee Timothy", description: "Premium hay", price: 399 },
    { imageUrl:"https://i5.walmartimages.com/seo/Small-Pet-Select-Value-Choice-Timothy-Hay-8LB_32eb8a3a-0a42-42e9-823f-caddc1efcd5a.cccc5cb1e8290a2fc6326cc372f50d03.jpeg",name: "Small Pet Select", description: "Fresh farm hay", price: 449 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG007OXa8rSww_iMozW5WF8A5Y-vVEQSJ08g&s",name: "Mazuri Rabbit Diet", description: "Complete pellet diet", price: 479 },
  ],
  Hamster: [
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OUb02L-E3Aa4skJbocM8ymVsudgAHE7O8A&s",name: "Kaytee Fiesta", description: "Nutritionally fortified mix", price: 199 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJK7ZjSgiQWsAzse9HimByAEnsA8LJMCMKw&s",name: "Oxbow Hamster", description: "Organic pellets", price: 229 },
    { imageUrl:"https://supremepetfoods.com/wp-content/uploads/2024/08/tiny_friends_farm-OPTIMISED.webp",name: "Tiny Friends Farm", description: "Tasty small animal food", price: 249 },
    { imageUrl:"https://images-cdn.ubuy.co.in/639daa67a60a80494a3cd8c4-vitakraft-vitasmart-pet-rabbit-food.jpg",name: "Vitakraft Vitasmart", description: "Daily health formula", price: 279 },
  ],
  Reptile: [
    { imageUrl:"https://shoplineimg.com/62b4292fbba6b80017657b5e/62ce56174b4a98001dbbf83e/800x.jpeg?",name: "Zoo Med ReptiSticks", description: "For aquatic turtles", price: 299 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4mkwxLxfkbFgxvZXtBS2-OYtOozkD4wbMQ&s",name: "Fluker’s Blend", description: "Variety mix for reptiles", price: 319 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYRfItl0O3j9W1PsVWvM10VZtNSR48nWgyA&s",name: "Repashy Superfoods", description: "Gel food for geckos", price: 339 },
    { imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFydIvo_WqyKUlhRi67OHlYVUnd8Qj-HaozQ&s",name: "Zilla Munchies", description: "Dried insect treat", price: 289 },
  ],
};

const FoodNutritionPage = () => {
  const [selectedPet, setSelectedPet] = useState("Dog");

  const handleBuy = (item) => {
    const options = {
      key: "rzp_test_4mLIR5foMq9QC0",
      amount: item.price * 100,
      currency: "INR",
      name: "Pet Food Store",
      description: item.name,
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#facc15",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4">
        <h2 className="text-xl font-bold text-black-400 mb-4">Pet Types</h2>
        {Object.keys(foodDetails).map((pet) => (
          <button
            key={pet}
            onClick={() => setSelectedPet(pet)}
            className={`block w-full text-left px-4 py-2 mb-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-black ${
              selectedPet === pet ? "bg-yellow-400 text-black" : ""
            }`}
          >
            {pet}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Food Options for {selectedPet}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foodDetails[selectedPet].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-yellow-500 hover:text-black p-4 rounded-lg shadow-lg transition"
            >
              <img
                src={item.imageUrl}
                alt={item.imageUrl}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-white">{item.description}</p>
              <p className="text-white font-semibold mt-1">₹{item.price}</p>
              <button
                onClick={() => handleBuy(item)}
                className="mt-3 w-full bg-yellow-400 hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FoodNutritionPage;