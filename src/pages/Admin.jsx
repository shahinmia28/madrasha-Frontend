import { useState } from 'react';
import styled from 'styled-components';
import StudentInputPage from '../components/InputPage/StudentInputPage';
import StaffInputPage from '../components/InputPage/StaffInputPage';
import ResultInputPage from '../components/InputPage/ResultInputPage';
import NoticeInputPage from '../components/InputPage/NoticeInputPage';

const Admin = ({ noticeData, resultData, staffData, admin, studentData }) => {
  const [data, setData] = useState('');

  return (
    <Wrapper>
      <div className='container'>
        <div className='data-add-link'>
          <h2 className='title my-box'>Welcome to Admin Dashboard</h2>
          <div className='row'>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='admin-btn'>
                <button
                  onClick={() => setData('student')}
                  className='btn my-box'
                >
                  Student
                </button>
              </div>
            </div>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='admin-btn'>
                <button onClick={() => setData('staff')} className='btn my-box'>
                  Teacher, Comity and Staff
                </button>
              </div>
            </div>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='admin-btn'>
                <button
                  onClick={() => setData('result')}
                  className='btn my-box'
                >
                  Result
                </button>
              </div>
            </div>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='admin-btn'>
                <button
                  onClick={() => setData('notice')}
                  className='btn my-box'
                >
                  Notice
                </button>
              </div>
            </div>
          </div>

          <div className='admin-page'>
            {data === 'student' ? (
              <StudentInputPage studentData={studentData} admin={admin} />
            ) : (
              ''
            )}
            {data === 'staff' ? (
              <StaffInputPage staffData={staffData} admin={admin} />
            ) : (
              ''
            )}
            {data === 'result' ? (
              <ResultInputPage resultData={resultData} admin={admin} />
            ) : (
              ''
            )}
            {data === 'notice' ? (
              <NoticeInputPage noticeData={noticeData} admin={admin} />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
  .data-add-link {
    .row {
      .col {
        padding: 20px 0;
        .admin-btn {
          margin: auto;
          padding: 5px;
          width: 90%;
          text-align: center;
          button {
            text-transform: uppercase;
            width: 100%;
            font-size: 17px;
            font-weight: 500;
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
`;
export default Admin;
