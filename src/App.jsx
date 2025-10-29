import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AvailabilityProvider } from './context/AvailabilityContext';
import './compatibility.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <AvailabilityProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-lightBg to-white dark:from-darkBg dark:to-purple-900/30 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <ChatBot />
          </div>
        </Router>
      </AvailabilityProvider>
    </ThemeProvider>
  );
}

export default App;
