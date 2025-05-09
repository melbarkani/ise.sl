import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import CreateQuote from './Pages/CreateQuote/Quote';
import Maintenance from './components/Maintenance/Maintenance';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-quote" element={<Maintenance />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
