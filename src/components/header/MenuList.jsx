import React, { useState } from 'react';
import { menuList } from '../../data/data';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuList = ({ menuOpen, setMenuOpen, admin }) => {
  const [subList, setSubList] = useState([]);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logout Successful');
    navigate('/');
  };

  return (
    <Wrapper className='menu-list'>
      {menuList.map((curElem, index) => {
        return (
          <div
            key={index}
            className='menu-items'
            onMouseMove={() => setSubList(curElem.list ? curElem.list : [])}
          >
            <div className='menu-item' onClick={() => setActive(!active)}>
              {!curElem.list ? (
                curElem.id ? (
                  <a href={curElem.id}>{curElem.name}</a>
                ) : (
                  <NavLink
                    to={`/${curElem.url}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {curElem.name}
                  </NavLink>
                )
              ) : (
                <p>{curElem.name}</p>
              )}

              {curElem.list ? <i className='fa-solid fa-angle-down'></i> : null}
            </div>

            {curElem.list ? (
              <div
                className={active ? 'sub-menu-item active' : 'sub-menu-item '}
              >
                {active
                  ? subList.map((subMenu, i) => {
                      return (
                        <>
                          <NavLink
                            to={`/${subMenu.url}`}
                            key={i}
                            onClick={() => setMenuOpen(false)}
                          >
                            {subMenu.title}
                          </NavLink>
                        </>
                      );
                    })
                  : ''}
              </div>
            ) : null}
          </div>
        );
      })}
      <div className='menu-items'>
        {admin ? (
          <div className='d-flex'>
            <div
              className='menu-item'
              onClick={() => setActive(!active)}
              key='admin'
            >
              <NavLink to={`/admin`}>Admin</NavLink>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='menu-items'>
        {admin === undefined ? (
          <div className='d-flex'>
            <div
              className='menu-item'
              key='login'
              onClick={() => (setActive(!active), setMenuOpen(false))}
            >
              <NavLink to={`/login`}>Login</NavLink>
            </div>
          </div>
        ) : (
          <div className='d-flex'>
            <div
              className='menu-item'
              onClick={() => setActive(!active)}
              key='logout'
            >
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  .menu-items {
    padding: 5px;
    text-transform: uppercase;
    font-family: 'PT Serif', serif;
    position: relative;
    font-size: 14px;
    .menu-item {
      color: #fff;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      p {
        margin: 0;
      }
      a {
        margin: 0;
        color: inherit;
        text-decoration: none;
      }
      i {
        margin-left: 8px;
      }
      &:hover {
        color: #d0df56;
      }
    }

    .sub-menu-item {
      display: none;
      width: 220px;
      background: #fff;
      flex-direction: column;
      padding: 0;
      border-top: 5px solid #d0df56;
      box-shadow: 0 0 20px -10px #062a4d;
      border-radius: 5px;
      position: absolute;
      top: 40px;
      z-index: 10;
      a,
      p {
        color: #333;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 15px;
        padding: 2px 25px;
        margin: 2px 0;
        cursor: pointer;
        &:hover {
          background: #e0e0e0;
        }
      }
    }
    &:hover {
      .sub-menu-item {
        &.active {
          display: flex;
        }
      }
    }
  }
`;
export default MenuList;
