import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProfileView.css';
import LogoutButton from '../Logoutbutton/Logoutbutton';

const ProfileView = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/api/user/${encodeURIComponent(email)}`);

      
      setUser(res.data);
      setEditedUser(res.data);
    } catch (err) {
      console.error('Error fetching profile:', err);
      alert('Failed to load profile.');
    }
  };

  fetchProfile();
}, [email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5001/api/user/${email}`,
        editedUser
      );
      setUser(res.data);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Failed to update profile.');
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-view-container">
      <div className="profile-header">
        <h2>Profile Details</h2>
        
      </div>
      
  {user.profileImage && (
  <img
src={`http://localhost:5001${user.profileImage || '/default-profile.png'}`}
    alt="Profile"
    width="150"
    onError={(e) => e.currentTarget.src = '/default-profile.png'}
  />
)}
      {!isEditing ? (
        <div className="profile-info">
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact:</strong> {user.contact}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>DOB:</strong> {user.dob}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      ) : (
        <div className="profile-edit-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="username"
              value={editedUser.username || ''}
              onChange={handleInputChange}
            />
          </div><div className="form-group">
  <label>Email:</label>
  <input
    type="email"
    name="email"
    value={editedUser.email || ''}
    disabled
  />
</div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={editedUser.contact || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={editedUser.gender || ''}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={editedUser.location || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>DOB:</label>
            <input
              type="date"
              name="dob"
              value={editedUser.dob || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <textarea
              name="bio"
              value={editedUser.bio || ''}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSave} className="save-button">
            Save Changes
          </button>
        </div>
      )}
      
   <div className="bottom-buttons">
  <button 
    onClick={() => setIsEditing(!isEditing)}
    className="edit-button"
  >
    {isEditing ? 'Cancel' : 'Edit Profile'}
  </button>
  <div className="logout-button">
    <LogoutButton />
  </div>
</div>
    </div>
  );
};

export default ProfileView;

