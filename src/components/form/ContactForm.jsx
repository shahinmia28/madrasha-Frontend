import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { toast } from 'react-custom-alert';

const ContactForm = () => {
  const form = useRef();
  const alertInfo = (text) => toast.success(text);
  // const reload = (delay) => {
  //   setTimeout(window.location.reload(), delay);
  // };
  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_9ulrmfp',
        'template_bnsnecr',
        form.current,
        'jkYs_JR56BJQ6vazO'
      )
      .then(alertInfo('Thanks for your Massage!'));
  };

  return (
    <Wrapper className='form'>
      <div className='container'>
        <div className='form-wrapper'>
          <form ref={form} onSubmit={sendEmail} action='#' className='my-box'>
            <h2 className='title my-box mb-4'>Contact Us</h2>

            <div className='mb-3 row'>
              <div className='col-12 col-lg-4 my-2'>
                <input
                  type='text'
                  name='Full Name'
                  placeholder='First Name *'
                  required
                  className='form-control'
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className='col-12 col-lg-4  my-2'>
                <input
                  className='form-control'
                  type='phone'
                  name='phone'
                  placeholder='Phone *'
                  required
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <div className='col-12  my-2'>
                <textarea
                  className='form-control'
                  name='massage'
                  id='massage'
                  cols='30'
                  rows='5'
                  placeholder='Write Message...'
                ></textarea>
              </div>
            </div>

            <div className='button'>
              <button type='submit' className='btn btn-primary'>
                Sent
              </button>
              <button type='reset' className='btn btn-danger'>
                reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  form {
    padding: 30px;
    h2 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 30px;
      padding: 5px;
    }
    .form-control {
      outline: none;
      background: transparent;
      border: 1px solid #666;
    }
    .button {
      display: flex;
      justify-content: left;
      align-items: center;
      button {
        margin: 10px;
      }
    }
  }
`;
export default ContactForm;
