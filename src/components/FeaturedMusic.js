import React, { useEffect, useState } from "react";
import "../styles/FeaturedMusic.css";
import { Card, Carousel, Image, Row, Stack } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const FeaturedMusic = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > New Music";
  }, []);
  return (
    <div className="featured py-4">
      <div>
        <h3>Featured Music</h3>
      </div>

      <Carousel
        className="mb-4 mt-3"
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
      >
        <Carousel.Item>
          <Image src="https://images.unsplash.com/photo-1588066080712-b972871ee36b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" />

          <Carousel.Caption>
            <h3>Be With You</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" />
          <Carousel.Caption>
            <h3>Song 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://images.unsplash.com/photo-1528575950036-63c4853d3f6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" />
          <Carousel.Caption>
            <h3>Song 3</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="mx-3">
        <Card.Body>
          <AudioPlayer
            src="/beWithYou.m4a"
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedMusic;
