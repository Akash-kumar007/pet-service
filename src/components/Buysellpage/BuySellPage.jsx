import { useState } from "react";
import "./BuySellPage.css";

const Buysellpage = () => {
  const [mode, setMode] = useState("buy");
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Cute Puppy #1",
      description: "Breed: Labrador",
      price: 3000,
      category: "dog",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Cute Puppy #2",
      description: "Breed: Labrador",
      price: 3000,
      category: "dog",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Cute Puppy #3",
      description: "Breed: Labrador",
      price: 3000,
      category: "dog",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, category, image } = formData;

    if (!name || !description || !price || !category) {
      console.log("Please fill all required fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      description,
      price,
      category,
      image: image ? URL.createObjectURL(image) : "https://via.placeholder.com/150",
    };

    setItems([newItem, ...items]);
    setFormData({ name: "", description: "", price: "", category: "", image: null });
    setPreview(null);
    setMode("buy");
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Pet Buy / Sell Marketplace</h1>

      <div className="toggle-buttons">
        <button
          onClick={() => setMode("buy")}
          className={mode === "buy" ? "active-buy" : ""}
        >
          Buy
        </button>
        <button
          onClick={() => setMode("sell")}
          className={mode === "sell" ? "active-sell" : ""}
        >
          Sell
        </button>
      </div>

      {mode === "buy" ? (
        <div>
          <h2>Available Pets / Products</h2>
          <div className="card-grid">
            {items.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">₹{item.price}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>List a Pet / Product for Sale</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Pet/Product Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />

            {preview && (
              <div style={{ marginBottom: "12px" }}>
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "200px", borderRadius: "8px" }}
                />
              </div>
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Buysellpage;
