import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
