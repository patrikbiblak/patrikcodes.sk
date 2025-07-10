import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./components/Navigation";
import Footer from "./components/Footer";
import ContactModal from "./hooks/ContactModal";

const App = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="content">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/src/pages/AboutPage.js" element={<AboutPage />}/>
            <Route path="/src/pages/ProjectsPage.js" element={<ProjectsPage />}/>
            <Route path="/src/pages/ContactPage.js" element={<ContactPage />}/>
          </Routes>
        </main>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;