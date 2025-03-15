import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../../Style/Gallery.css';
import Image1 from '../../images/christmas/1.png';
import Image2 from '../../images/christmas/2.png';
import Image3 from '../../images/christmas/3.png';
import Image4 from '../../images/christmas/4.png';
import Image5 from '../../images/christmas/5.png';
import Image6 from '../../images/christmas/6.png';


const Crishmas = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const galleryItems = [
    {
      id: 1,
      image: Image1,
      title: 'Sunday Worship',
      description: 'Weekly congregation gathering for prayer and worship'
    },
    {
      id: 2,
      image: Image2,
      title: 'Baptism Ceremony',
      description: 'Sacred baptism of new church members'
    },
    {
        id: 1,
        image: Image3,
        title: 'Sunday Worship',
        description: 'Weekly congregation gathering for prayer and worship'
      },
      {
        id: 1,
        image: Image4,
        title: 'Sunday Worship',
        description: 'Weekly congregation gathering for prayer and worship'
      },
      {
        id: 1,
        image: Image5,
        title: 'Sunday Worship',
        description: 'Weekly congregation gathering for prayer and worship'
      },
      {
        id: 1,
        image: Image6,
        title: 'Sunday Worship',
        description: 'Weekly congregation gathering for prayer and worship'
      },
    
  ];

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="gallery-container container py-5 mt-5">
      <h2 className="text-center mb-4 gallery-title">Church Gallery</h2>
      {/* <p className="text-center mb-5 lead gallery-intro">
        Christmas
      </p> */}
        <h2 className="section-title mt-5">Christmas</h2>


      <div className="row g-4 justify-content-center">
        {galleryItems.map((item) => (
          <div key={item.id} className="col-6 col-sm-4 col-md-4 col-lg-3">
            <div 
              className="gallery-card position-relative"
              onClick={() => handleImageClick(item)}
              style={{ height: '200px' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded-3"
                loading="lazy"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' 
                }}
              />
              <div className="gallery-overlay rounded-3">
                <h5 className="overlay-title">{item.title}</h5>
                <p className="overlay-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedItem && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="img-fluid rounded-2"
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
              <p className="mt-3">{selectedItem.description}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Crishmas;