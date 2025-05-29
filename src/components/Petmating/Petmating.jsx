import { useState } from 'react';
import axios from 'axios';
import './Petmating.css'; // Make sure the CSS file exists and path is correct

const PetMatingForm = () => {
    const [formData, setFormData] = useState({
        ownerName: '',
        contact: '',
        petName: '',
        petType: '',
        breed: '',
        gender: '',
        age: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/api/mating-requests', formData);
            alert(res.data.message);
            setFormData({
                ownerName: '',
                contact: '',
                petName: '',
                petType: '',
                breed: '',
                gender: '',
                age: '',
                location: '',
                description: '',
            });
        } catch (err) {
            alert('Error submitting request');
        }
    };

    return (
        <div className="pet-mating-container">
            <h2>Pet Mating Request Form</h2>
            <form onSubmit={handleSubmit} className="pet-mating-form">
                {[
                    { name: 'ownerName', label: "Owner's Name" },
                    { name: 'contact', label: 'Contact Number' },
                    { name: 'petName', label: "Pet's Name" },
                    { name: 'petType', label: 'Pet Type (e.g., Dog, Cat)' },
                    { name: 'breed', label: 'Breed' },
                    { name: 'gender', label: 'Gender' },
                    { name: 'age', label: 'Age', type: 'number' },
                    { name: 'location', label: 'Location' },
                ].map(({ name, label, type = 'text' }) => (
                    <div key={name}>
                        <label>{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <div>
                    <label>Additional Details</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default PetMatingForm;
