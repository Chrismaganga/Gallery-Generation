import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <h3 className="text-sm bg-blue-700 mt-4 sm:mt-6 lg:mt-8">video & images Generation</h3>
      </div>
    </Router>
  );
};

export default App;
