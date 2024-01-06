import React, { useState } from 'react';
import styled from 'styled-components';

const NoticeList = ({ noticeData }) => {
  const [answer, setAnswer] = useState([]);

  const showData = (data) => {
    if (data === answer) {
      setAnswer([]);
    } else {
      setAnswer(data);
    }
  };

  return (
    <Wrapper>
      {noticeData
        ? noticeData
            .slice()
            .reverse()
            .map((curElem, i) => {
              return (
                <div className='item' key={i}>
                  <div
                    className={
                      answer === curElem ? 'question active' : 'question'
                    }
                    onClick={() => showData(curElem)}
                  >
                    <div className='title-icon'>
                      {answer === curElem ? (
                        <i className='fa-solid fa-minus'></i>
                      ) : (
                        <i className='fa-solid fa-plus'></i>
                      )}
                      <h4>{curElem.noticeTitle}</h4>
                    </div>

                    <span>{curElem.createdAt.slice(0, 10)}</span>
                  </div>
                  <div className='answer-box'>
                    {answer === curElem ? (
                      <div className='answer' data-aos='fade-down'>
                        <p className='text-muted'>
                          {curElem.noticeDescription}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })
        : ''}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .item {
    .question {
      background: #fff;
      border-bottom: 1px solid #bdbdbd;
      padding: 20px 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title-icon {
        display: flex;
        align-items: center;
        h4 {
          color: #6ec1e4;
          margin-bottom: 0;
          font-size: 20px;
        }
        i {
          background: #6ec1e4;
          color: #fff;
          border-radius: 3px;
          padding: 2px 3px;
          font-size: 10px;
          margin-right: 10px;
        }
      }
      span {
        font-size: 18px;
        color: #062a4d;
      }

      &.active {
        h4 {
          color: #062a4d;
        }
        i {
          background: #062a4d;
        }
      }
    }
    .answer-box {
      overflow: hidden;
      .answer {
        background: #fff;
        padding: 20px;
        overflow: hidden;
        transition: all 0.4s ease-in-out;
        text-align: justify;
        p {
          font-size: 18px;
        }
      }
    }
  }
`;
export default NoticeList;
