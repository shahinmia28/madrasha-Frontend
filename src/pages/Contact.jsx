import styled from 'styled-components';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
  return (
    <Wrapper>
      <div className='contact-form'>
        <ContactForm />
      </div>
      <div className='contact-map'>
        <iframe src='https://maps.google.com/maps?q=BILCHAPRA,%20bhuapur&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'></iframe>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  .contact-map {
    iframe {
      width: 100%;
      height: 500px;
    }
  }
  .contact-form {
    background: #d0df56;
    padding: 80px 0;
  }
`;
export default Contact;
