import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from "./pages/AiChatbot";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutPage";
import Contact from "./pages/contactUs";
import Educational from "./pages/Educational";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/educational" element={<Educational />} />
      </Routes>
    </Router>
  );
};

export default App;
