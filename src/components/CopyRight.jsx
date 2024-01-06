import React from 'react';
import styled from 'styled-components';
import Logo from './header/Logo';

const CopyRight = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col col-12 col-md-6'>
            <Logo />
          </div>
          <div className='col col-12 col-md-6'>
            <p className='text-muted'>
              &copy; 2023. All Rights Reserved by Bilchapra SSDM
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 5px 0;
  background: #062a4d;
  color: #fff;
  .row {
    align-items: center;
    .col {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      p {
        width: 100%;
        font-size: 17px;
        text-align: end;
      }
    }
  }
`;
export default CopyRight;
