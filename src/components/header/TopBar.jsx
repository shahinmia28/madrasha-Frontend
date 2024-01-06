import styled from 'styled-components';

const TopBar = () => {
  return (
    <Wrapper className='d-none d-lg-block'>
      <div className='container'>
        <div className='d-flex topbar-text'>
          <h3>BILCHAPRA SOBUJ SANGHA DAKHIL MADRASAH</h3>
          <span className='text-muted'>BHUAPUR, TANGAIL. EIIN : 114046</span>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .topbar-text {
    text-align: center;
    flex-direction: column;
    padding: 20px 0;
    color: #062a4d;
    h3 {
      font-weight: 800;
    }
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
export default TopBar;
