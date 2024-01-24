import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MerchandiseItem = ({ name, price, image, description }) => (
  <>
    <Row xs={1} md={3} className="g-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <div>
            <h2>{name}</h2>
            <img height={300} src={image} />
            <p className="mt-3">
              <strong>{description}</strong>
            </p>
            <h3>${price.toFixed(2)}</h3>
            <Button>Add to Cart</Button>
          </div>
        </Col>
      ))}
    </Row>
  </>
);

const MerchandiseList = ({ items }) => (
  <div className="merchandise-list">
    {items.map((item, index) => (
      <MerchandiseItem key={index} {...item} />
    ))}
  </div>
);

const Merchandise = () => {
  const merchandiseData = [
    {
      name: "Core Cotton Tee",
      description:
        "Port & Company - Core Cotton Tee. An indispensable T-shirt in our classic silhouette with a very friendly price. 5.4-ounce 100% cotton. Removable tag for comfort and relabeling.",
      price: 19.99,
      image:
        "https://www.studioimagepromotions.com/cdn/shop/files/SIP-PC54-CHARCOAL-1_1200x1799.jpg?v=1695655663"
    }
    // { name: "Item 2", price: 29.99, image: "item2.jpg" },
    // { name: "Item 3", price: 19.99, image: "item1.jpg" },
    // { name: "Item 4", price: 29.99, image: "item2.jpg" },
    // { name: "Item 5", price: 14.99, image: "item3.jpg" }
    // Add more items as needed
  ];

  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Merch";
  }, []);

  return (
    <div
      className="mb-0 p-5 merchandise"
      style={{
        backgroundColor: "rgb(51, 51, 51)",
        overflow: "hidden",
        color: "white"
      }}
    >
      <h2>Worship Grid Merchandise</h2>
      <br />
      <MerchandiseList items={merchandiseData} />
    </div>
  );
};

export default Merchandise;
