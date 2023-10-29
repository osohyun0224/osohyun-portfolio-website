import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const SliderImage = styled.img`
  width: 100%;
  display: none;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <Container>
      {images.map((image, index) => (
        <SliderImage
          key={index}
          src={image}
          alt={`slide-${index}`}
          style={{ display: index === current ? 'block' : 'none' }}
        />
      ))}
      <LeftArrow onClick={() => setCurrent((prevCurrent) => (prevCurrent - 1 + images.length) % images.length)}>
        ◀
      </LeftArrow>
      <RightArrow onClick={() => setCurrent((prevCurrent) => (prevCurrent + 1) % images.length)}>
        ▶
      </RightArrow>
    </Container>
  );
};

export default ImageSlider;
