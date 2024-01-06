import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../Api';
import { useLocation, useNavigate } from 'react-router-dom';

const StaffUpdateForm = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const item = location.state;

  const [staff, setStaff] = useState({
    name: item.name,
    email: item.email,
    phone: item.phone,
    category: item.category,
    subject: item.subject,
    index: item.index,
    password: '',
    image: '',
  });

  const handleImage = (e) => {
    setStaff({ ...staff, image: e.target.files[0] });
  };

  const onChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (staff.category === '') {
      alert('Select a category first please!!');
    } else {
      const formData = new FormData();
      formData.append('name', staff.name);
      formData.append('email', staff.email);
      formData.append('phone', staff.phone);
      formData.append('class', staff.class);
      formData.append('category', staff.category);
      formData.append('subject', staff.subject);
      formData.append('index', staff.index);
      formData.append('password', staff.password);
      if (staff.image) {
        formData.append('image', staff.image, staff.image.name);
      }

      const response = await fetch(`${API}/update_staff/${item._id}`, {
        method: 'PUT',
        body: formData,
      });

      const json = await response.json();
      if (!json.success) {
        alert('Enter valid data');
      } else {
        alert('Successfully Staff Data is Updated');
        navigate('/admin');
      }
    }
  };
  return (
    <Wrapper>
      <div className='container'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit} className='my-box'>
            <h2 className='title my-box mb-4'>Teacher, Comity and Staff</h2>

            <div className='mb-3 row'>
              <div className='col-12 col-lg-4 my-2'>
                <input
                  type='text'
                  name='name'
                  value={staff.name}
                  onChange={onChange}
                  className='form-control'
                  placeholder='Full Name'
                  required
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='email'
                  name='email'
                  value={staff.email}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Enter Email`}
                  required
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='number'
                  name='phone'
                  value={staff.phone}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Enter Phone Number`}
                  required
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <div className='col-12 col-lg-4 my-2'>
                <select
                  type='text'
                  name='category'
                  value={staff.category}
                  onChange={onChange}
                  className='form-select'
                  required
                >
                  <option defaultValue='none'>Category</option>
                  <option value='teacher'>Teacher</option>
                  <option value='comity'>Comity</option>
                  <option value='staff'>Staff</option>
                </select>
              </div>

              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='text'
                  name='index'
                  value={staff.index}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Index (optional)`}
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='text'
                  name='subject'
                  value={staff.subject}
                  onChange={onChange}
                  className='form-control'
                  placeholder={`Subject`}
                  required
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  type='password'
                  name='password'
                  value={staff.password}
                  onChange={onChange}
                  className='form-control'
                  placeholder='password'
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <label htmlFor='image' className='btn btn-light'>
                  Upload Image (max: 2MB)
                </label>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={handleImage}
                  className='form-control d-none'
                />
                <p className='text-muted p-1'>{staff.image.name}</p>
              </div>
            </div>

            <button type='submit' className=' btn btn-primary'>
              Update Data
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
export default StaffUpdateForm;
