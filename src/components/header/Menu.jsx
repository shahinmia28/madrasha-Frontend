import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import MenuList from './MenuList';

const Menu = ({ admin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <div className={menuOpen ? 'bg-blare' : ''}> </div>
      <div className='menu'>
        <button
          className='toggle-btn d-block btn-my d-lg-none'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className='d-none d-lg-block'>
          <MenuList
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            admin={admin}
          />
        </div>

        {/* small screen menu bar */}
        <div className={menuOpen ? 'menu-bar-sm active' : 'menu-bar-sm '}>
          <div className='close'>
            <i
              className='fa-regular fa-rectangle-xmark'
              onClick={() => setMenuOpen(false)}
            ></i>
          </div>
          <div className='scroll'>
            <MenuList
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              admin={admin}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bg-blare {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #062a4d61;
    z-index: 9;
  }
  .menu {
    position: relative;
    .toggle-btn {
      font-size: 25px;
      padding: 4px 12px;
    }

    /* small display  */
    .menu-bar-sm {
      display: block;
      position: fixed;
      top: 0px;
      left: -300px;
      height: 100%;
      width: 280px;
      padding: 20px;
      background: #fff;
      transition: all 0.4s linear;
      box-shadow: 0 0 20px -10px #062a4d;
      z-index: 10;
      &.active {
        left: 0;
      }
      .close {
        display: flex;
        justify-content: end;
        margin-bottom: 20px;
        i {
          font-size: 30px;
          color: #062a4d;
          cursor: pointer;
          opacity: 0.8;
          transform: all 0.4s linear;
          &:hover {
            opacity: 1;
          }
        }
      }
      .scroll {
        height: 100%;
        overflow: scroll;
        padding: 20px 0;
        .menu-list {
          flex-direction: column;
          border-top: 1px solid #c6c6c6;
          overflow: hidden;

          .menu-items {
            border-bottom: 1px solid #c6c6c6;
            &::after {
              content: '';
              width: 100%;
              height: 2px;
              background: #d0df56;
              position: absolute;
              left: 0;
              bottom: 0px;
              transform: translate3d(-100%, 0, 0);
              transition: transform 0.4s;
            }
            .menu-item {
              color: #333;
            }
            &:hover {
              &::after {
                transform: translate3d(0, 0, 0);
              }
              .sub-menu-item {
                position: static;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
`;
export default Menu;
