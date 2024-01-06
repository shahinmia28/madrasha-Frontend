import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const NavBar = ({ admin }) => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='nav-bar py-lg-5 d-flex px-3 px-lg-0 '>
          <Logo />
          <Menu admin={admin} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: #062a4d;
  color: #fff;
  .nav-bar {
    justify-content: space-between;
    align-items: center;
    margin: auto;
    height: 80px;
    .btn-my {
      text-decoration: none;
      color: #062a4d;
    }
  }
`;
export default NavBar;
