  import { useState } from 'react';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebase';
  import { useNavigate, Link } from 'react-router-dom';
  import './login.css';

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // alert('Login successful!');
        navigate('/home');
      } catch (error) {
        alert('Invalid user password');
      }
    };

    return (
      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="login-group">
            <input type="email" placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
            <i className="login fas fa-user"></i>
          </div>
          <div className="login-group">
            <input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
            <i className="login fas fa-lock"></i>
          </div>
          <div className="login-options">
            <label>                                                                                                                                  </label>
            <span><Link to="/forgot-password">Forgot password?</Link></span>
          </div>
          <button type="submit">Login</button>
          <p>Don’t have an account? <Link to="/">Register</Link></p>
        </form>
      </div>
    );
  };

  export default Login;