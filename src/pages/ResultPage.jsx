import React, { useState } from 'react';
import API from '../components/Api';
import styled from 'styled-components';

const ResultPage = ({ resultData }) => {
  const [studentData, setStudentData] = useState({
    className: '',
    rollNumber: '',
  });
  const [result, setResult] = useState();
  const onChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findResult = await resultData.filter(
      (curElem) =>
        studentData.className === curElem.className &&
        studentData.rollNumber === curElem.rollNumber
    );
    setResult(findResult[0]);
  };

  return (
    <Wrapper>
      <div className='container'>
        <form onSubmit={handleSubmit} className='my-box'>
          <select
            className='form-select text-muted'
            type='text'
            name='className'
            value={studentData.className}
            onChange={onChange}
            required
          >
            <option value='0'>Class Name</option>
            <option value='1'>Class One</option>
            <option value='2'>Class Two</option>
            <option value='3'>Class Three</option>
            <option value='4'>Class Four</option>
            <option value='5'>Class Five</option>
            <option value='6'>Class Six</option>
            <option value='7'>Class Seven</option>
            <option value='8'>Class Eight</option>
            <option value='9'>Class Nine</option>
            <option value='10'>Class Ten</option>
          </select>
          <input
            type='number'
            name='rollNumber'
            value={studentData.rollNumber}
            onChange={onChange}
            className='form-control'
            placeholder='Roll Number *'
            required
          />

          <button type='submit' className='btn btn-light'>
            Search result
          </button>
        </form>

        <div className='result-data-box'>
          <div className='my-box'>
            {result !== undefined ? (
              <>
                <h4>Name: {result.studentName}</h4>
                <h4>Class: {result.className}</h4>
                <h4>Roll: {result.rollNumber}</h4>
                <a
                  href={`${API}/public/image/${result.image}`}
                  className='btn  btn-outline-primary'
                >
                  Download Result
                </a>
              </>
            ) : (
              <>
                <p>No Result found</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 20px;
  .container {
    form {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 5px;
      border-bottom: 2px solid #062a4d;
      margin-bottom: 30px;
      select,
      input {
        width: 35%;
        border-bottom: 1px solid #062a4d;
      }
      button {
        border-bottom: 1px solid #062a4d;
      }

      @media (max-width: 772px) {
        flex-direction: column;
        select,
        button {
          width: 90%;
          margin: 10px 0;
        }
      }
    }

    .result-data-box {
      display: flex;
      justify-content: center;
      height: 100%;
      padding-bottom: 40px;
      .my-box {
        padding: 20px;
        width: 50%;
        text-align: center;
        a {
          text-decoration: none;
          font-size: 16px;
        }
        h4 {
          font-size: 18px;
        }
      }
    }
  }
`;
export default ResultPage;
