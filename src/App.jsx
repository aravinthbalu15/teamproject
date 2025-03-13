import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import OurParish from "./components/OurParish";
import Anbiyangal from "./components/Anbiyangal";
import Gallery from "./components/Gallery";
import SpecialGallery from "./components/Videos";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer"
import BackgroundSlider from "./components/Background";
import Videos from "./components/Videos";
import ImageCategory from "./components/ImageCategory";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<BackgroundSlider />} />
        <Route path="/ourparish" element={<OurParish />} />
        <Route path="/anbiyangal" element={<Anbiyangal />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/special-gallery" element={<SpecialGallery />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/images-category" element={<ImageCategory/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
