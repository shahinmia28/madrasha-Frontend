import styled from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import API from '../Api';
import { NavLink } from 'react-router-dom';

const GetNotice = ({ noticeData, admin }) => {
  const deleteHandler = async (e) => {
    await fetch(`${API}/delete_notice/${e}`, {
      method: 'DELETE',
    }).then(async (res) => {
      let response = await res.json();
      if (response.success) {
        alert('Notice deleted');
        window.location.reload();
      } else {
        alert('Notice not deleted');
      }
    });
  };

  return (
    <Wrapper>
      <div className='container'>
        <h2 className='title'>Notice</h2>
        {noticeData !== undefined
          ? noticeData
              .slice()
              .reverse()
              .map((curElem, index) => {
                return (
                  <div key={index} className='notice-box my-3 p-3 my-box'>
                    <div className='data'>
                      <h4>{curElem.noticeTitle}</h4>
                      <p>{curElem.noticeDescription}</p>
                    </div>
                    {admin === true ? (
                      <div className='admin-control'>
                        <span>
                          <FaRegTrashAlt
                            onClick={() => deleteHandler(curElem._id)}
                            className='delete'
                          />
                        </span>
                        <span>
                          <NavLink to={'/noticeupdate'} state={curElem}>
                            <FiEdit className='edit' />
                          </NavLink>
                        </span>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })
          : ''}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  .container {
    .title {
      text-align: center;
      border-bottom: 2px solid #062a4d;
      margin-bottom: 30px;
    }
    .notice-box {
      display: flex;
      justify-content: space-between;
      .data {
        width: 79%;
        padding: 10px;
        h4 {
          color: #50aab2;
        }
        p {
          color: #062a4d;
          font-size: 17px;
        }
      }
      .admin-control {
        margin-right: 0px;
        width: 19%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        span {
          width: 100%;
          text-align: center;
          padding: 5px;
          font-size: 25px;
        }
        .delete {
          color: #ff0000;
          opacity: 1;
          cursor: pointer;
          :hover {
            opacity: 0.5;
          }
        }
        .edit {
          color: #50aab2;
          opacity: 1;
          cursor: pointer;
          :hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
export default GetNotice;
