import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StudentsListView = ({ data, classN }) => {
  const allData = [data, classN];
  let totalStudent;

  if (data !== undefined) {
    totalStudent = data.length;
  }

  return (
    <Wrapper className='my-box'>
      <div className='row'>
        <div className='col col-lg-3'>
          <h4> Class: {classN}</h4>
        </div>
        <div className='col col-lg-6'>
          <h4>Total Students: {totalStudent}</h4>
        </div>
        <div className='col col-lg-3'>
          <NavLink
            to='/studentpage'
            state={allData}
            className='btn btn-outline-dark'
          >
            Details
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px 0;
  .row {
    background: #062a4d2e;
    .col {
      border-left: 2px solid #062a4d;
      text-align: center;
      padding: 10px;
      margin: auto;
      height: 100%;
      h4 {
        padding: 10px;
        color: #062a4d;
        font-size: 18px;
        margin-bottom: 0;
      }
      a {
        border: 2px solid #062a4d;
        font-size: 15px;
        font-weight: 500;
        color: #062a4d;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.4s linear;
        &:hover {
          color: #ffffff;
          background: #062a4d;
        }
      }
    }
  }
`;
export default StudentsListView;
