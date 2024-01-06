import styled from 'styled-components';
import StudentsListView from './StudentsListView';

const Students = ({ studentData }) => {
  let classOne, classTwo, classTree, classFour, classFive, classSix, classSeven;
  if (studentData !== undefined) {
    classOne = studentData.filter((curElem) => curElem.className === '1');
    classTwo = studentData.filter((curElem) => curElem.className === '2');
    classTree = studentData.filter((curElem) => curElem.className === '3');
    classFour = studentData.filter((curElem) => curElem.className === '4');
    classFive = studentData.filter((curElem) => curElem.className === '5');
    classSix = studentData.filter((curElem) => curElem.className === '6');
    classSeven = studentData.filter((curElem) => curElem.className === '7');
    classSeven = studentData.filter((curElem) => curElem.className === '8');
    classSeven = studentData.filter((curElem) => curElem.className === '9');
    classSeven = studentData.filter((curElem) => curElem.className === '10');
  }

  return (
    <Wrapper className='my-box' data-aos='fade-right'>
      <h2 className='title my-box'>ছাত্র-ছাত্রীর তথ্য</h2>
      <div className='list-box'>
        <StudentsListView data={classOne} classN='1' />
        <StudentsListView data={classTwo} classN='2' />
        <StudentsListView data={classTree} classN='3' />
        <StudentsListView data={classFour} classN='4' />
        <StudentsListView data={classFive} classN='5' />
        <StudentsListView data={classSix} classN='6' />
        <StudentsListView data={classSeven} classN='7' />
        <StudentsListView data={classSeven} classN='8' />
        <StudentsListView data={classSeven} classN='9' />
        <StudentsListView data={classSeven} classN='10' />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  margin: 30px 0;
  height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  .list-box {
    padding: 20px;
  }
`;
export default Students;
