import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
