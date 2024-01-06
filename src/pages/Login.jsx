import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../components/Api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [admin, setAdmin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: admin.email,
        password: admin.password,
      }),
    });
    const json = await response.json();
    if (!json.success) {
      alert('Enter valid data');
    } else {
      localStorage.setItem('authToken', json.accessToken);
      alert('Login success');
      navigate('/');
    }
  };
  const onChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div className='container'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit} className='my-box'>
            <h2 className='form-title'>Login</h2>
            <div className='mb-3'>
              <input
                type='email'
                name='email'
                value={admin.email}
                onChange={onChange}
                className='form-control'
                placeholder='Email'
                required
              />
            </div>
            <div className='mb-3'>
              <input
                type='password'
                name='password'
                value={admin.password}
                onChange={onChange}
                className='form-control'
                placeholder='Password'
                required
              />
            </div>
            <div className='group'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
              <p className='m-3'>Forget Password</p>
            </div>
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
        .group {
          display: flex;
          align-items: center;
          p {
            opacity: 0.8;
            cursor: pointer;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 772px) {
    .form-wrapper {
      padding: 50px 0;
      form {
        width: 90%;
      }
    }
  }
`;
export default Login;
