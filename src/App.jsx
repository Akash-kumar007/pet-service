import './App.css';
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';
import Home from "./pages/Home/Home";
import Footer from './components/Footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PetTicket from './components/petticket/petticket';
import Petfriendlycafs from './components/pet driendly cafs/petfriendlycafs';
import MedicalServices from './components/medicalservice/medicalservice';
import BookAppointment from './components/medicalservice/bookappointment';
import Petsdetails from './components/petsdetails';
import Signup from './components/Signup/Signup';
import Login from './components/login/login';
import MyNavbar from './components/Navbar/navbar';
import Petgrooming from './components/Petgrooming/Petgrooming';
import Booknow from './components/Petgrooming/Booknow/Booknow';
import Buysellpage from './components/Buysellpage/BuySellPage';
import Petmating from './components/Petmating/Petmating';
import Aboutus from './pages/Aboutus/Aboutus';
import ContactUs from './components/Contact/Contact';
import BookTable from './components/pet driendly cafs/Booking/Booking';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SplashScreen from './Splashscreen/Splashscreen';
import AdminPortal from './components/AdminPanel/AdminPanel';
import FoodItemList from './components/FoodItem/FoodItem';

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/login", "/", "/signup","/forgot-password"];  // "/" bhi yahan include kiya gaya hai
  const hideLayout = noHeaderFooterRoutes.includes(location.pathname);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className='app'>
      {!hideLayout && <MyNavbar />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/petticket" element={<PetTicket />} />
        <Route path="/Petfriendlycafs" element={<Petfriendlycafs />} />
        <Route path="/pet/:id" element={<Petsdetails />} />
        <Route path="/medicalservice" element={<MedicalServices />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/buysellpage" element={<Buysellpage />} />
        <Route path="/petmating" element={<Petmating />} />
        <Route path="/petgrooming" element={<Petgrooming />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book/:id" element={<BookTable />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/adminpanel" element={<AdminPortal/>} />
        <Route path="/cart" element={<FoodItemList/>} />

      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
