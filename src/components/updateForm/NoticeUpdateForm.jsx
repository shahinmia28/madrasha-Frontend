import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../Api';
import { useLocation, useNavigate } from 'react-router-dom';

const NoticeUpdateForm = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const curElem = location.state;

  const [notice, setNotice] = useState({
    noticeTitle: curElem.noticeTitle,
    noticeDescription: curElem.noticeDescription,
  });

  const onChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API}/update_notice/${curElem._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        noticeTitle: notice.noticeTitle,
        noticeDescription: notice.noticeDescription,
      }),
    });

    const json = await response.json();
    if (!json.success) {
      alert('Enter valid data');
    } else {
      alert('Successfully data is Update');
      navigate('/admin');
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit} className='my-box'>
            <h2 className='title my-box mb-4'>Notice Form</h2>
            <div className='mb-3 row'>
              <div className='col-12 my-2'>
                <input
                  type='text'
                  name='noticeTitle'
                  value={notice.noticeTitle}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Notice Title'
                  required
                />
              </div>
              <div className='col-12  my-2'>
                <textarea
                  name='noticeDescription'
                  id='noticeDescription'
                  rows='5'
                  type='text'
                  value={notice.noticeDescription}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Notice Description'
                  required
                ></textarea>
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>
              Update Notice
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    .form-wrapper {
      display: flex;
      justify-content: center;
      height: 100%;
      padding: 80px 0;
      form {
        background: #d0df56;
        padding: 20px;
        width: 50%;
        .form-title {
          color: #fff;
          text-align: center;
          padding: 15px;
        }
        .form-control {
          outline: none;
          background: transparent;
          border: 1px solid #666;
        }
      }
      @media (max-width: 772px) {
        padding: 50px 0;
        form {
          width: 80%;
        }
      }
    }
  }
`;
export default NoticeUpdateForm;
