import styled from 'styled-components';
import CommonHero from '../components/CommonHero';
import GetStaff from '../components/getDataAdmin/GetStaff';

const StaffPage = ({ staffData, admin }) => {
  return (
    <Wrapper>
      <CommonHero title='All Staff List' bgImg='slide1.jpg' />
      <div className='container'>
        <GetStaff staffData={staffData} admin={admin} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list {
    margin: 80px 0;
    .title {
      text-align: center;
    }
    .row {
      margin: 30px 0;
      .col {
        padding: 10px;
      }
    }
  }
`;
export default StaffPage;
