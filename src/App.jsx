import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './AllSlides/Home';
import Footer from './components/Footer';
import Login from './AllSlides/Login';
import Signin from './AllSlides/Signin';
import DetailsProduct from './AllSlides/DetailsProduct';
import WhoAreWe from './AllSlides/WhoAreWe';
import ContactUs from './AllSlides/ContactUs';
import ComponenteTheOrder from './AllSlides/CompleteTheOrder';

function App() {
  return (
    <div  dir='rtl'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/details' element={<DetailsProduct />} />
        <Route path='/who-are-we' element={<WhoAreWe />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/components' element={<ComponenteTheOrder />} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
