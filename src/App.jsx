// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectTracker from "./pages/ProjectTracker";
import ProposalUpload from "./pages/ProposalUpload";
// import Footer from "./components/Footer";
import PortfolioGallery from "./pages/PortfolioGallery";
import SuccessPage from "./pages/SuccessPage";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";


function App() {
  return (
   <>

    <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/tracker" element={<ProjectTracker />} />
         <Route path="/proposal" element={<ProposalUpload />} />
         <Route path="/portfolio" element={<PortfolioGallery />} />
         <Route path="/success" element={<SuccessPage />} />
         <Route path="/team" element={<Team />} />


        {/* Add About, Services, Contact later */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
