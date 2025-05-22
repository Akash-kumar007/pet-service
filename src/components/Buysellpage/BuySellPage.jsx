import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BuySellPage.css";

const Buysellpage = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("buy");
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Cute Puppy #1",
      description: "Breed: Labrador",
      price: 3000,
      category: "dog",
      image:
        "https://images.unsplash.com/photo-1604659554766-e22cd9c7c61f?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Cute Puppy #2",
      description: "Breed: Labrador",
      price: 3000,
      category: "dog",
      image:
        "https://images.unsplash.com/photo-1566903036573-b68d7366dd32?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Cute Puppy #3",
      description: "Breed: Labrador",
      price: 3000,
      category: "dog",
      image:
        "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2080&auto=format&fit=crop",
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
      alert("Please fill all required fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      description,
      price: Number(price),
      category,
      image: image
        ? URL.createObjectURL(image)
        : "https://via.placeholder.com/150",
    };

    setItems([newItem, ...items]);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: null,
    });
    setPreview(null);
    setMode("buy");
  };

  const handleBuy = (item) => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet or add the Razorpay script to index.html.");
      return;
    }

    const options = {
      key: "rzp_test_4mLIR5foMq9QC0", // Your Razorpay test key
      amount: item.price * 100, // in paise
      currency: "INR",
      name: "Pet Marketplace",
      description: item.name,
      handler: function (response) {
        const purchase = {
          paymentId: response.razorpay_payment_id,
          itemName: item.name,
          amount: item.price,
          date: new Date().toLocaleString(),
        };

        const existingPurchases =
          JSON.parse(localStorage.getItem("purchases")) || [];
        localStorage.setItem(
          "purchases",
          JSON.stringify([purchase, ...existingPurchases])
        );

        navigate("/admin", { state: purchase });
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#28a745",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
        <button onClick={() => navigate("/admin")}>Admin Panel</button>
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
                <button className="buy-btn" onClick={() => handleBuy(item)}>
                  Buy
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
