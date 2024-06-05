import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Header/Navbar';
import Footer from './FooterContainer/Footer';
import Manual from './Pages/Manual';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manual' element={<Manual />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
