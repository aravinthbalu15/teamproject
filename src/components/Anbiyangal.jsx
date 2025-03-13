import React from 'react';
import '../Style/Anbiyangal.css';

const Anbiyangal = () => {
  const images = [
    // { src: "", title: "Image 1" },
    { src: "../src/images/image1.png", title: "Anbiyam-1" },
    { src: "../src/images/image1.png", title: "Anbiyam-2" },
    { src: "../src/images/image1.png", title: "Anbiyam-3 " },
    { src: "../src/images/image1.png", title: "Anbiyam-4" },
    { src: "../src/images/image1.png", title: "Anbiyam-5" },
    { src: "../src/images/image1.png", title: "Anbiyam-6" },
    { src: "../src/images/image1.png", title: "Anbiyam-7" },
  ];

  return (
    <div className="anbiyangal-container mt-5 ">
      <h2 className="title">Anbiyangal</h2>
      {images.map((images, index) => (
        <div className="image-container" key={index}>
          <h3 className="image-title">{images.title}</h3>
          <img src={images.src} alt={images.title} className="image" />
        </div>
      ))}
    </div>
  );
}

export default Anbiyangal;
