import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CommonHero = ({ bgImg }) => {
  return (
    <Wrapper
      className='hero'
      style={{ backgroundImage: `url(/image/${bgImg})` }}
    ></Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 150px 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export default CommonHero;
