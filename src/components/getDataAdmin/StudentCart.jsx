import styled from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import API from '../Api';

const StudentCart = ({ student, admin }) => {
  const deleteHandler = async (e) => {
    await fetch(`${API}/delete_student/${e}`, {
      method: 'DELETE',
    }).then(async (res) => {
      let response = await res.json();
      if (response.success) {
        alert('Student deleted');
        // window.location.reload();
      } else {
        alert('Student not deleted');
      }
    });
  };
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          {student !== undefined
            ? student.map((curElem, i) => {
                const {
                  className,
                  createdAt,
                  dateOfBirth,
                  fatherName,
                  gender,
                  image,
                  motherName,
                  rollNumber,
                  studentName,
                  _id,
                } = curElem;
                return (
                  <div className='col-12 col-lg-6' key={i}>
                    <div className='box my-3 p-3 my-box'>
                      <div className='row'>
                        <div className='col-4'>
                          <div className='image'>
                            <img
                              src={`${API}/public/image/${image}`}
                              alt={_id}
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='student-data'>
                            <h3>
                              Name : <span>{studentName} </span>
                            </h3>
                            <p>
                              Father : <span>{fatherName}</span>
                            </p>
                            <p>
                              Mother : <span>{motherName}</span>
                            </p>
                            <p>
                              Class : <span>{className} </span>
                            </p>
                            <p>
                              Roll : <span>{rollNumber} </span>
                            </p>
                            <p>
                              Gender : <span>{gender} </span>
                            </p>
                            <p>
                              Date Of Birth : <span>{dateOfBirth}</span>
                            </p>
                            <p>
                              Admitted At :{' '}
                              <span>{createdAt.slice(0, 10)}</span>
                            </p>
                          </div>
                        </div>

                        <div className='col-2'>
                          {admin ? (
                            <div className='admin-control'>
                              <span>
                                <FaRegTrashAlt
                                  onClick={() => deleteHandler(_id)}
                                  className='delete'
                                />
                              </span>
                              <span>
                                <NavLink to={'/studentupdate'} state={curElem}>
                                  <FiEdit className='edit' />
                                </NavLink>
                              </span>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .box {
    height: 320px;
    display: flex;
    justify-content: space-between;
    .row {
      .image {
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
        }
      }
      .student-data {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: 100%;
        h3 {
          color: #50aab2;
          text-transform: capitalize;
          font-weight: 700;
          font-size: 25px;
        }
        p {
          color: #062a4dbb;
          font-size: 17px;
          line-height: 0.9;
          font-weight: 500;

          span {
            font-size: 18px;
            color: #062a4d;
            text-transform: capitalize;
          }
        }
      }

      .admin-control {
        height: 100%;
        margin-right: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        border-left: 2px solid #062a4d;
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
export default StudentCart;
