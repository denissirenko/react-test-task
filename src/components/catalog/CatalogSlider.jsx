import { Carousel } from 'antd';

export const AppSlider = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, i) => (
        <div key={i}>
          <img src={image} alt={`image_${i + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};
