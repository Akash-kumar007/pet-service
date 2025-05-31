// import { useNavigate } from 'react-router-dom';

// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('userEmail');
//     navigate('/profileform'); // Redirect to form page or login
//   };

//   return (
//     <button onClick={handleLogout} className="logout-button">
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;

import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/'); // Redirect to form page or login
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;