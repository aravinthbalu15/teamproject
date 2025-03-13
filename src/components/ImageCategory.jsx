import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Style/ImageCategory.css";

// Import images correctly
import image1 from "../images/chrismas.png";
import image2 from "../images/Easter.png";
import image3 from "../images/GoodFriday.png";
import image4 from "../images/NewYear.png";
import image5 from "../images/allsoul.png";
import image6 from "../images/others.png";



const categories = [
  { id: 1, title: "Christmas ", image: image1 },
  { id: 2, title: "Easter Sunday", image: image2 },
  { id: 3, title: "Good Friday", image: image3 },
  { id: 4, title: "New Year", image: image4 },
  { id: 5, title: "All Souls' Day", image: image5 },
  { id: 6, title: "Others", image: image6 }
];

const ImageCategory = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(`/gallery?category=${id}`);
  };

  return (
    <Container className="gallery-container mt-5">
      <h2 className="section-title">Image Categories</h2>
      <Row>
        {categories.map((category) => (
          <Col md={4} sm={6} xs={12} key={category.id} className="mb-4">
            <Card className="album-card" onClick={() => handleCategoryClick(category.id)}>
              <Card.Img variant="top" src={category.image} className="album-image" />
              <Card.Body>
                <Card.Title className="album-title">{category.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageCategory;
