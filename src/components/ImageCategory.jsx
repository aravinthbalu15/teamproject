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
  { title: "Christmas", image: image1, path: "/christmas" },
  { title: "Easter Sunday", image: image2, path: "/easter" },
  { title: "Good Friday", image: image3, path: "/goodfriday" },
  { title: "New Year", image: image4, path: "/newyear" },
  { title: "All Souls' Day", image: image5, path: "/all-souls" },
  { title: "Others", image: image6, path: "/others" }
];

const ImageCategory = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path); // Navigate to the correct path
  };

  return (
    <Container className="gallery-container mt-5">
      <h2 className="section-title">Image Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="album-card" onClick={() => handleCategoryClick(category.path)}>
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
