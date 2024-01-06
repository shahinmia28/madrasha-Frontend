import Slider from 'react-slick';
import styled from 'styled-components';
import { sliderData } from '../data/data';

const Hero = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Slider {...settings} className='slider'>
        {sliderData.map((curElem, index) => {
          return (
            <div key={index} className='slide-item'>
              <div
                className='bg-img'
                style={{
                  backgroundImage: `url(${curElem.img})`,
                }}
              ></div>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .slider {
    .slide-item {
      width: 100%;
      height: 500px;
      .bg-img {
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        /* Small Screen */
        @media (max-width: 768px) {
          height: 400px;
        }
      }
    }
    .slick-dots {
      bottom: 20px;
    }
  }
`;

export default Hero;
