import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import OurParish from "./components/OurParish";
import Anbiyangal from "./components/Anbiyangal";
import Gallery from "./components/Gallery";
import SpecialGallery from "./components/Videos";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ImageCategory from "./components/ImageCategory";
import EasterSunday from "./components/All-images/EasterSunday";
import NewYear from "./components/All-images/NewYear";
import GoodFriday from "./components/All-images/GoodFriday";
import AllSouls from "./components/All-images/AllSouls";
import Crishmas from "./components/All-images/Crishmas";
import Others from "./components/All-images/Others";
import Videos from "./components/Videos";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourparish" element={<OurParish />} />
        <Route path="/anbiyangal" element={<Anbiyangal />} />
        <Route path="/special-gallery" element={<SpecialGallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/images-category" element={<ImageCategory />} />
        <Route path="/christmas" element={<Crishmas />} />
        <Route path="/easter" element={<EasterSunday />} />
        <Route path="/goodfriday" element={<GoodFriday />} />
        <Route path="/newyear" element={<NewYear />} />
        <Route path="/all-souls" element={<AllSouls />} />
        <Route path="/others" element={<Others />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
