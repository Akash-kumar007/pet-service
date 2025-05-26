import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    contact: '',
    gender: '',
    location: '',
    dob: '', // ✅ Added
    bio: '',
    profileImage: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile((prev) => ({ ...prev, profileImage: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      navigate(`/profile/${savedEmail}`);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', profile.username);
    formData.append('email', profile.email);
    formData.append('contact', profile.contact);
    formData.append('gender', profile.gender);
    formData.append('location', profile.location);
    formData.append('dob', profile.dob); // ✅ Included in submission
    formData.append('bio', profile.bio);
    if (profile.profileImage) {
      formData.append('profileImage', profile.profileImage);
    }

    try {
      await axios.post('http://localhost:5001/api/user', formData);
      localStorage.setItem('userEmail', profile.email);
      navigate(`/profile/${profile.email}`);
    } catch (err) {
      console.error('Error saving profile:', err);
      alert('Failed to save profile');
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Edit Profile</h2>
      {imagePreview && <img src={imagePreview} alt="Preview" className="profile-image-preview" width="150" />}
      <form onSubmit={handleSubmit} className="profile-form">
        <input type="text" name="username" placeholder="Name" value={profile.username} onChange={handleChange} className="profile-input" required />
        <input type="email" name="email" placeholder="Email" value={profile.email} onChange={handleChange} className="profile-input" required />
        <input type="text" name="contact" placeholder="Contact" value={profile.contact} onChange={handleChange} className="profile-input" required />
        <select name="gender" value={profile.gender} onChange={handleChange} className="profile-select" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="location" placeholder="Location" value={profile.location} onChange={handleChange} className="profile-input" required />
        
        {/* ✅ DOB field */}
        <input type="date" name="dob" value={profile.dob} onChange={handleChange} className="profile-input" required />
        
        <textarea name="bio" placeholder="Bio" value={profile.bio} onChange={handleChange} className="profile-textarea" />
        <input type="file" onChange={handleImageChange} className="profile-file-input" />
        <button type="submit" className="profile-submit-button">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
