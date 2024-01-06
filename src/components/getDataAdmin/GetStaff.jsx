import React, { useEffect, useState } from 'react';
import API from '../Api';
import styled from 'styled-components';
import StaffCart from './StaffCart';

const GetStaff = ({ staffData, admin }) => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='teacher data-box row'>
          <h2 className='title my-box'>Teacher's List</h2>
          {staffData !== undefined
            ? staffData
                .filter((curElem) => curElem.category === 'teacher')
                .map((item, index) => (
                  <div className='col-12 col-md-6 col-lg-3 col' key={index}>
                    <StaffCart item={item} admin={admin} />
                  </div>
                ))
            : ''}
        </div>
        <div className='comity data-box row'>
          <h2 className='title my-box'>Comity List</h2>
          {staffData !== undefined
            ? staffData
                .filter((curElem) => curElem.category === 'comity')
                .map((item, index) => (
                  <div className='col-12 col-md-6 col-lg-3 col' key={index}>
                    <StaffCart item={item} admin={admin} />
                  </div>
                ))
            : ''}
        </div>
        <div className='Official data-box row'>
          <h2 className='title my-box'>Official List</h2>

          {staffData !== undefined
            ? staffData
                .filter((curElem) => curElem.category === 'staff')
                .map((item, index) => (
                  <div className='col-12 col-md-6 col-lg-3 col' key={index}>
                    <StaffCart item={item} admin={admin} />
                  </div>
                ))
            : ''}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .title {
    border-bottom: 2px solid #062a4d;
    text-align: center;
    margin: 40px 0;
  }
  .col {
    padding: 10px;
  }
`;
export default GetStaff;
