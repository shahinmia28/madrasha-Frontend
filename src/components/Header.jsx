import React from 'react';
import styled from 'styled-components';
import NavBar from './header/NavBar';
import TopBar from './header/TopBar';
const Header = ({ admin }) => {
  return (
    <div id='top'>
      <TopBar />
      <NavBar admin={admin} />
    </div>
  );
};

export default Header;
