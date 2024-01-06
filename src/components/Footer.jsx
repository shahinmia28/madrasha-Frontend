import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { schedule, usefulLinks } from '../data/data';

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4'>
            <div className='contact-info'>
              <h3>Contact Info</h3>
              <h6>We want to help you pass and get back on the road!</h6>

              <div className='d-flex address'>
                <i className='fa-regular fa-compass text-muted'></i>
                <div className='icon-font'>
                  <h5>BILCHAPRA SOBUJ SANGHA DAKHIL MADRASAH</h5>
                  <span className='text-muted'>Bhuapur, Tangail</span>
                </div>
              </div>
              <div className='d-flex email my-4'>
                <i className='fa-solid fa-envelope-open-text text-muted'></i>
                <div className='icon-font'>
                  <h5>TELL US THE REASON FOR YOUR QUERY</h5>
                  <span className='text-muted'>bilchaprassdm@gmail.com</span>
                </div>
              </div>
              <div className='phone'>
                <i className='fa-solid fa-headset  text-muted'></i>
                <span>01777223345</span>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='schedule'>
              {schedule.map((curElem, i) => (
                <div className='d-flex schedule-data' key={i}>
                  <h4 className='day'>{curElem.day}</h4>
                  <h4 className='time'>{curElem.time}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='useful-link'>
              <h3>Useful Link</h3>
              <ul className='nav-list'>
                {usefulLinks.map((curElem, i) => (
                  <li key={i}>
                    <a href={curElem.link}>{curElem.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin: 80px 0;
  .row {
    align-items: center;
    .contact-info {
      padding: 10px;
      margin: 10px;
      h3 {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #6ec1e4;
      }
      h6 {
        font-size: 15px;
        font-weight: 700;
        color: #50aab2;
        margin-bottom: 50px;
      }
      i {
        font-size: 20px;
        margin-right: 10px;
      }
      .phone {
        margin: 20px 0;
        i {
          font-size: 45px;
        }
        span {
          font-size: 45px;
          letter-spacing: -4px;
          font-weight: 500;
        }
      }
    }
    .schedule {
      background-color: #062a4d;
      background-image: url('./images/clock.png');
      background-position: center center;
      background-repeat: no-repeat;
      padding: 30px;
      margin: 10px;
      position: relative;
      .schedule-data {
        justify-content: space-between;
        align-items: center;
        margin: 30px 10px;
        h4 {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
      }
    }
    .useful-link {
      padding: 20px;
      margin: 10px;
      h3 {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #6ec1e4;
        padding: 10px;
      }
      .nav-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          margin: 5px;
          padding: 5px;
          font-size: 17px;
          a {
            color: #333;
            text-decoration: none;
            &.active {
              color: #d0df56;
            }
          }
          &:hover {
            a {
              color: #d0df56;
            }
          }
        }
      }
    }
  }
  @media (max-width: 772px) {
  }
`;
export default Footer;
