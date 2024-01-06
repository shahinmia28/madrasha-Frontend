import React, { useState } from 'react';
import API from '../Api';
import styled from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const GetResult = ({ resultData, admin }) => {
  const [className, setClassName] = useState('');
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findResult = await resultData.filter(
      (curElem) => className === curElem.className
    );
    setResult(findResult);
  };
  // delete function
  const deleteHandler = async (e) => {
    await fetch(`${API}/delete_result/${e}`, {
      method: 'DELETE',
    }).then(async (res) => {
      let response = await res.json();
      if (response.success) {
        alert('Result is deleted');
        window.location.reload();
      } else {
        alert('Result is not deleted');
      }
    });
  };

  return (
    <Wrapper>
      <div className='container'>
        <form onSubmit={handleSubmit} className='title my-box'>
          <h4 className=''>Result List of Class : {className}</h4>
          <select
            className='form-select'
            type='text'
            name='className'
            value={className}
            onChange={(e) => setClassName(e.target.value)}
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
          <button type='submit' className='btn btn-light'>
            Search result
          </button>
        </form>

        <div className='result-data-box'>
          {result !== undefined
            ? result.map((item, index) => (
                <div key={index} className='my-box'>
                  <div className='data'>
                    <h4>Name: {item.studentName}</h4>
                    <h4>Class: {item.className}</h4>
                    <h4>Roll: {item.rollNumber}</h4>
                    <a href={`${API}/public/image/${item.image}`}>
                      Download Result
                    </a>
                  </div>
                  {admin === true ? (
                    <div className='admin-control'>
                      <FaRegTrashAlt
                        onClick={() => deleteHandler(item._id)}
                        className='delete'
                      />

                      <NavLink to={'/resultupdate'} state={item}>
                        <FiEdit className='edit' />
                      </NavLink>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))
            : ''}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    form {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 5px;
      border-bottom: 2px solid #062a4d;
      margin-bottom: 30px;
      select {
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 40px;
      .my-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        padding: 20px;
        width: 50%;
        text-align: start;
        .data {
          h4 {
            font-size: 18px;
          }
          a {
            font-size: 16px;
          }
        }
        .admin-control {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;

          .delete {
            text-align: center;
            margin: 10px 0;
            font-size: 25px;
            color: #ff0000;
            opacity: 1;
            cursor: pointer;
            :hover {
              opacity: 0.5;
            }
          }
          .edit {
            margin: 10px 0;
            font-size: 25px;
            color: #50aab2;
            opacity: 1;
            cursor: pointer;
            :hover {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
`;
export default GetResult;
