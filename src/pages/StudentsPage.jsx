import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudentCart from '../components/getDataAdmin/StudentCart';

const StudentsPage = ({ studentData, admin }) => {
  const [student, setStudent] = useState();
  const [className, setClassName] = useState();
  let location = useLocation();

  const initialData = () => {
    const data = location.state;
    if (data !== null) {
      setStudent(data[0]);
      setClassName(data[1]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findStudent = await studentData.filter(
      (curElem) => className === curElem.className
    );
    setStudent(findStudent);
  };
  useEffect(() => {
    initialData();
  }, []);

  return (
    <Wrapper>
      <div className='container'>
        <form onSubmit={handleSubmit} className='title my-box'>
          <h4 className=''>Students List of Class : {className}</h4>
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
            Search Students
          </button>
        </form>
      </div>

      <div className='student-cart'>
        <StudentCart student={student} admin={admin} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 10px 0;
  .container {
    form {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 5px;
      border-bottom: 2px solid #062a4d;
      select {
        width: 35%;
        border-bottom: 1px solid #062a4d;
      }
      margin-bottom: 30px;
      @media (max-width: 772px) {
        flex-direction: column;
        select,
        button {
          width: 90%;
          margin: 10px 0;
        }
      }
    }
  }
`;
export default StudentsPage;
