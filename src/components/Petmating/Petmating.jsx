import { useState } from "react";
import "./Petmating.css";

const Petmating = () => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    breed: "",
    age: "",
    gender: "",
    location: "",
    ownerContact: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("petName", formData.petName);
    formDataToSend.append("petType", formData.petType);
    formDataToSend.append("breed", formData.breed);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("ownerContact", formData.ownerContact);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await fetch("http://localhost:5000/api/pet-service", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Pet mating request submitted successfully!");
        setFormData({
          petName: "",
          petType: "",
          breed: "",
          age: "",
          gender: "",
          location: "",
          ownerContact: "",
          image: null,
        });
        setPreview(null);
      } else {
        alert("Failed to submit: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="container">
      <h1>Pet Mating Match Finder</h1>
      <p className="subtext">Fill the form to list your pet for mating matches</p>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="petName"
          placeholder="Pet Name"
          value={formData.petName}
          onChange={handleChange}
          required
        />

        <select
          name="petType"
          value={formData.petType}
          onChange={handleChange}
          required
        >
          <option value="">Select Pet Type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age (in years)"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Your City or Area"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="ownerContact"
          placeholder="Your Contact Info"
          value={formData.ownerContact}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        {preview && (
          <img
            src={preview}
            alt="Pet Preview"
            className="image-preview"
          />
        )}

        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default Petmating;
