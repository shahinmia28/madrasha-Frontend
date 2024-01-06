import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../Api';

const ResultForm = () => {
  const [result, setResult] = useState({
    studentName: '',
    className: '',
    rollNumber: '',
    image: '',
  });

  const handleImage = (e) => {
    setResult({ ...result, image: e.target.files[0] });
  };
  const onChange = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('studentName', result.studentName);
    formData.append('className', result.className);
    formData.append('rollNumber', result.rollNumber);
    formData.append('image', result.image, result.image.name);

    const response = await fetch(`${API}/create_result`, {
      method: 'POST',
      body: formData,
    });

    const json = await response.json();
    if (!json.success) {
      alert('Enter valid data');
    } else {
      alert('Successfully data is added');
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit} className='my-box'>
            <h2 className='title my-box mb-4'>Result Form</h2>
            <div className='mb-3 row'>
              <div className='col-12 col-lg-6 my-2'>
                <input
                  type='text'
                  name='studentName'
                  value={result.studentName}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Student Name *'
                  required
                />
              </div>
              <div className='col-12 col-lg-6  my-2'>
                <input
                  type='number'
                  name='className'
                  value={result.className}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Class Name*'
                  required
                />
              </div>
            </div>

            <div className='mb-3 row'>
              <div className='col-12 col-lg-6  my-2'>
                <input
                  type='number'
                  name='rollNumber'
                  value={result.rollNumber}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Roll Number *'
                  required
                />
              </div>
              <div className='col-12 col-lg-6 my-2'>
                <label htmlFor='image' className='btn btn-light text-muted'>
                  Upload Result: (PDF Only) *
                </label>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={handleImage}
                  className='form-control d-none'
                  required
                />
                <p className='text-muted p-1'>{result.image.name}</p>
              </div>
            </div>

            <button type='submit' className=' btn btn-primary'>
              Add Result
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
        .form-control,
        .btn-light {
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

export default ResultForm;
