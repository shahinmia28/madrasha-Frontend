import API from '../Api';
import styled from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const StaffCart = ({ item, admin }) => {
  const { _id, index, email, phone, image, name, subject } = item;
  const deleteHandler = async (e) => {
    await fetch(`${API}/delete_staff/${e}`, {
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
    <Wrapper className='my-box'>
      <div className='image-title'>
        <img src={`${API}/public/image/${image}`} alt={_id} />
        <h3>{name}</h3>
        <span>{subject}</span> <br />
        <span> index: {index} </span>
      </div>
      <div className='contact'>
        <span>{phone}</span>
        <span>{email}</span>
      </div>

      {admin ? (
        <div className='admin-control'>
          <FaRegTrashAlt
            onClick={() => deleteHandler(_id)}
            className='delete'
          />

          <NavLink to={'/staffupdate'} state={item}>
            <FiEdit className='edit' />
          </NavLink>
        </div>
      ) : (
        ''
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 10px;
  text-align: center;
  .image-title {
    text-align: center;
    padding-top: 20px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 30px;
      position: relative;
    }
    h3 {
      color: #062a4d;
      font-size: 20px;
      text-transform: capitalize;
      font-weight: 600;
      font-family: 'PT Serif', serif;
      margin: 0;
    }
    span {
      color: #50aab2;
      font-size: 15px;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #6a6a6a;
    padding-bottom: 20px;
  }
  .admin-control {
    margin: 10px 0;
    border-top: 2px solid #062a4d;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .delete {
      margin-right: 10px;
      font-size: 25px;
      color: #ff0000;
      opacity: 1;
      cursor: pointer;
      :hover {
        opacity: 0.5;
      }
    }
    .edit {
      margin-left: 10px;
      font-size: 25px;
      color: #50aab2;
      opacity: 1;
      cursor: pointer;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;
export default StaffCart;

// data-aos='flip-left'
