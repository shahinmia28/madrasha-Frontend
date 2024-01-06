import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../Api';
import { useLocation, useNavigate } from 'react-router-dom';

const StudentUpdateForm = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const item = location.state;

  const [student, setStudent] = useState({
    studentName: item.studentName,
    fatherName: item.fatherName,
    motherName: item.motherName,
    className: item.className,
    rollNumber: item.rollNumber,
    dateOfBirth: item.dateOfBirth,
    gender: item.gender,
    image: '',
  });

  const handleImage = (e) => {
    setStudent({ ...student, image: e.target.files[0] });
  };
  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      student.className === undefined ||
      student.className === 'Class Name' ||
      student.className === ''
    ) {
      alert('Select a Class Name first please!!');
    } else {
      const formData = new FormData();
      formData.append('studentName', student.studentName);
      formData.append('fatherName', student.fatherName);
      formData.append('motherName', student.motherName);
      formData.append('className', student.className);
      formData.append('rollNumber', student.rollNumber);
      formData.append('dateOfBirth', student.dateOfBirth);
      formData.append('gender', student.gender);
      if (student.image) {
        formData.append('image', student.image, student.image.name);
      }

      const response = await fetch(`${API}/update_student/${item._id}`, {
        method: 'PUT',
        body: formData,
      });

      const json = await response.json();
      if (!json.success) {
        alert('Enter valid data');
      } else {
        alert('Successfully data is updated');
        navigate('/admin');
      }
    }
  };
  return (
    <Wrapper id='Student-form'>
      <div className='container'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit} className='my-box'>
            <h2 className='title my-box mb-4'>Student Update Form</h2>

            <div className='mb-3 row'>
              <div className='col-12 col-lg-4 my-2'>
                <input
                  type='text'
                  name='studentName'
                  value={student.studentName}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Student Name'
                  required
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='text'
                  name='fatherName'
                  value={student.fatherName}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Father's Name`}
                  required
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='text'
                  name='motherName'
                  value={student.motherName}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Mother's Name`}
                  required
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <div className='col-12 col-lg-4 my-2'>
                <select
                  className='form-select'
                  type='text'
                  name='className'
                  value={student.className}
                  onChange={onChange}
                  required
                >
                  <option defaultValue='none'>Class Name</option>
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
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='number'
                  name='rollNumber'
                  value={student.rollNumber}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Roll Number`}
                  required
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <select
                  className='form-select'
                  type='text'
                  name='gender'
                  value={student.gender}
                  onChange={onChange}
                  required
                >
                  <option defaultValue='none'>Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </div>
            <div className='mb-3 row'>
              <div className='col-12 col-lg-4 my-2'>
                <input
                  type='date'
                  name='dateOfBirth'
                  value={student.dateOfBirth}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Date Of Birth`}
                  required
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <label htmlFor='image' className='btn btn-light'>
                  Upload Image (max: 3MB)
                </label>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={handleImage}
                  className='form-control d-none'
                />
              </div>
            </div>

            <button type='submit' className=' btn btn-primary'>
              Update Student
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
        width: 80%;
        .form-title {
          color: #fff;
          text-align: center;
          padding: 15px;
        }
        .form-control,
        .form-select,
        .btn-light {
          outline: none;
          background: transparent;
          border: 1px solid #666;
        }
      }
      @media (max-width: 772px) {
        padding: 50px 0;
      }
    }
  }
`;
export default StudentUpdateForm;
